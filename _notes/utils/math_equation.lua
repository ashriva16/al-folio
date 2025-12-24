function Para(elem)
  -- Loop through the elements in the Para block
  for i, inline in ipairs(elem.content) do
    if inline.t == "Math" and inline.mathtype == "DisplayMath" then
      -- Convert $$...$$ block into LaTeX \begin{equation}...\end{equation}
      local equation = "\\begin{equation}" .. inline.text .. "\\end{equation}"
      
      -- Replace the Para block content with a RawBlock containing the LaTeX code
      return pandoc.RawBlock("tex", equation)
    end
  end
  return elem  -- Return the Para block unchanged if no math is found
end
