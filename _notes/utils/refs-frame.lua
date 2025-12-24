-- refs-as-frame.lua
local title = "References"
local slide_level = 2
function Meta(m)
  if m["reference-section-title"] then
    title = pandoc.utils.stringify(m["reference-section-title"])
  end
  if m["slide-level"] then
    slide_level = tonumber(pandoc.utils.stringify(m["slide-level"])) or slide_level
  end
end
function Div(d)
  if d.identifier == "refs" then
    local hdr = pandoc.Header(slide_level, title, { id = "references" })
    return { hdr, d }
  end
end
