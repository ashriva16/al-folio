-- latex_content_only.lua
-- Convert raw LaTeX embedded in the *main content* to HTML fragments.
-- Does NOT touch metadata/title/authors/subtitle/date or the title block.
-- Math is skipped (leave to MathJax/KaTeX).

-------------------------
-- Helpers
-------------------------

local function is_latex(fmt)
  fmt = (fmt or ""):lower()
  return fmt == "latex" or fmt == "tex"
end

-- Skip only obvious math so MathJax/KaTeX handle it
local function is_math_like(s)
  if not s or s == "" then return false end
  if s:match("%$%$") or s:match("^%s*%$") then return true end
  if s:match("\\%[") or s:match("\\%]") then return true end
  if s:match("\\begin%s*{equation%*?}") then return true end
  if s:match("\\begin%s*{align%*?}") then return true end
  if s:match("\\begin%s*{gather%*?}") then return true end
  if s:match("\\%(") or s:match("\\%)") then return true end
  return false
end

local function unwrap_p(html)
  return (html or ""):gsub("^%s*<p>(.*)</p>%s*$", "%1")
end

local function looks_like_env_block(s)
  return s and s:match("\\begin%s*{[%w*@]+}") and s:match("\\end%s*{[%w*@]+}")
end

-- Convert LaTeX -> HTML using Pandoc’s readers/writers (or pipe fallback)
local function convert_latex_to_html(src, is_block)
  if not src or src == "" then return nil end
  if is_math_like(src) then return nil end

  local html
  if pandoc.read and pandoc.write then
    local ok, doc = pcall(pandoc.read, src, "latex")
    if ok and doc then html = pandoc.write(doc, "html") end
  end
  if not html then
    local ok, out = pcall(function()
      return pandoc.pipe("pandoc", {"-f","latex","-t","html"}, src)
    end)
    if ok then html = out end
  end
  if not html or html == "" then return nil end

  html = html:gsub("%s+$", "")
  html = unwrap_p(html)

  if is_block then
    return pandoc.RawBlock("html", html)
  else
    return pandoc.RawInline("html", html)
  end
end

-- Sometimes LaTeX envs are split across many RawInline nodes inside a Para.
local function convert_env_inside_para(para)
  local acc, i, changed = {}, 1, false
  while i <= #para.content do
    local node = para.content[i]
    if node.t == "RawInline" and is_latex(node.format) then
      local buf = { node.text }
      local j = i + 1
      while j <= #para.content do
        local n2 = para.content[j]
        if n2.t == "RawInline" and is_latex(n2.format) then
          table.insert(buf, n2.text)
          j = j + 1
        else
          break
        end
      end
      local chunk = table.concat(buf, "")
      if looks_like_env_block(chunk) and not is_math_like(chunk) then
        local replaced = convert_latex_to_html(chunk, true)
        if replaced then
          table.insert(acc, replaced)
          i = j
          changed = true
        else
          table.insert(acc, node); i = i + 1
        end
      else
        table.insert(acc, node); i = i + 1
      end
    else
      table.insert(acc, node); i = i + 1
    end
  end
  if changed then return acc end
  return nil
end

-------------------------
-- Main content hooks
-------------------------

-- Raw *blocks* of LaTeX (e.g., \begin{tabular}...\end{tabular})
function RawBlock(el)
  if is_latex(el.format) then
    return convert_latex_to_html(el.text, true)
  end
end

-- Raw *inline* LaTeX (e.g., \textbf{X} written as raw tex)
function RawInline(el)
  if is_latex(el.format) then
    return convert_latex_to_html(el.text, false)
  end
end

-- LaTeX environments embedded in a paragraph as multiple raw inlines
function Para(el)
  local blocks = convert_env_inside_para(el)
  if blocks then return blocks end
end

-- Code fences like ```{=latex} ... ``` or ```latex ... ```
function CodeBlock(el)
  if el.classes and #el.classes > 0 then
    for _, c in ipairs(el.classes) do
      if c:lower() == "latex" then
        local converted = convert_latex_to_html(el.text, true)
        if converted then return converted end
      end
    end
  end
end

-- Optional: explicit containers marked as LaTeX
function Div(el)
  if el.attributes and (el.attributes["data-format"] == "latex" or el.attributes["data-format"] == "tex") then
    local latex_src = pandoc.utils.stringify(el)
    local converted = convert_latex_to_html(latex_src, true)
    if converted then return converted end
  end
end

function Span(el)
  if el.attributes and (el.attributes["data-format"] == "latex" or el.attributes["data-format"] == "tex") then
    local latex_src = pandoc.utils.stringify(el)
    local converted = convert_latex_to_html(latex_src, false)
    if converted then return converted end
  end
end

-- NOTE:
-- * No Meta(), Pandoc(), or Doc() callbacks here.
-- * We do not read/modify meta.title/author/subtitle/date.
-- * Title/author rendering stays exactly as Pandoc’s template produces.
