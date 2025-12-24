-- color_text.lua
local function html_color(model, color)
  model = (model or ""):upper()
  if model == "HTML" then
    -- add # if missing
    return color:match("^#") and color or ("#" .. color)
  elseif model == "RGB" then
    local r,g,b = color:match("^%s*(%d+)%s*,%s*(%d+)%s*,%s*(%d+)%s*$")
    if r and g and b then return string.format("rgb(%d,%d,%d)", r, g, b) end
  elseif model == "RGBF" or model == "rgb" then
    local r,g,b = color:match("^%s*([%d%.]+)%s*,%s*([%d%.]+)%s*,%s*([%d%.]+)%s*$")
    if r and g and b then
      local function s(x) x=tonumber(x) or 0; if x<0 then x=0 elseif x>1 then x=1 end; return math.floor(x*255+0.5) end
      return string.format("rgb(%d,%d,%d)", s(r), s(g), s(b))
    end
  elseif model == "GRAY" or model == "gray" then
    local x = tonumber(color); if x then
      x = math.floor(math.max(0, math.min(1, x))*255 + 0.5)
      return string.format("rgb(%d,%d,%d)", x,x,x)
    end
  end
  -- no model: allow CSS names or #hex as-is
  return color
end

function RawInline(el)
  if el.format ~= "tex" then return nil end

  -- \textcolor[MODEL]{COLOR}{TEXT}
  local model, color, text = el.text:match("\\textcolor%[([%a]+)%]{([^}]+)}{(.-)}")
  -- or \textcolor{COLOR}{TEXT}
  if not color then color, text = el.text:match("\\textcolor{([^}]+)}{(.-)}" ) end
  if not color or not text then return nil end

  -- Treat \textcolor{#1e90ff}{...} as HTML hex
  if not model and color:match("^#%x%x%x%x%x%x$") then model = "HTML"; color = color:gsub("^#","") end

  if FORMAT:match("html") then
    local css = html_color(model, color)
    return pandoc.RawInline("html", string.format('<span style="color:%s;">%s</span>', css, text))
  elseif FORMAT:match("latex") or FORMAT:match("pdf") then
    return el -- keep LaTeX for PDF
  else
    return pandoc.Str(text) -- other formats: drop styling
  end
end
