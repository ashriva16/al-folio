-- Convert LaTeX theorem-like environments into HTML Divs with classes.
local envs = {"definition","theorem","lemma","proposition","corollary","example","remark","proof"}

function RawBlock(el)
  if el.format ~= "tex" and el.format ~= "latex" then return nil end
  local s = el.text
  for _, env in ipairs(envs) do
    local pat = "\\begin%s*{%s*" .. env .. "%s*}(.-)\\end%s*{%s*" .. env .. "%s*}"
    local content = s:match(pat)
    if content then
      local blocks = pandoc.read(content, "latex").blocks
      return pandoc.Div(blocks, pandoc.Attr("", {env}, {}))
    end
  end
  return nil
end
