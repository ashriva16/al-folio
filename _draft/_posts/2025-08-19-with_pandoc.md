---
layout: posts
title: With Pandoc pure HTML
last_modified_at: 2025-08-19
date: 2025-08-19
toc:
  sidebar: left
description: something
tags: formatting charts
categories: sample-posts
thumbnail: /assets/img/blog/800x400.png
featured: true
disqus_comments: true
giscus_comments: true
related_posts: false
related_publications: true
tikzjax: true
chart:
  plotly: true
  chartjs: true
  echarts: true
images:
  compare: true
  slider: true
mermaid:
  enabled: true
  zoomable: true
pretty_table: true
map: true
pseudocode: true
tabs: true
math: true
---

<section id="introduction" class="level2" data-number="1">
<h2 data-number="1"><span class="header-section-number">1</span>
Introduction</h2>
<p><strong>Hello</strong> <span class="emoji"
data-emoji="smile">😄</span></p>
</section>
<section id="text-features" class="level2" data-number="2">
<h2 data-number="2"><span class="header-section-number">2</span> Text
features</h2>
<ul>
<li>This <del>is deleted text.</del></li>
<li><em>Italic</em>, <strong>bold</strong>, and <code>code</code>
text</li>
<li>Default highlight with <code>==highlight==</code>: <mark>this is
highlighted</mark></li>
<li>Pink highlight via raw HTML: <mark style="background:#ffc0cb;">this
is pink</mark></li>
<li>Blue font via raw tex: </li>
<li>Blue font via raw HTML: <span style="color:#1e90ff;">this text is
blue</span></li>
<li>Black highlight with yellow text:
<mark style="background:black;color:yellow">contrast demo</mark></li>
</ul>
<p>Here is a footnote reference,<a href="#fn1" class="footnote-ref"
id="fnref1" role="doc-noteref"><sup>1</sup></a> and another.<a
href="#fn2" class="footnote-ref" id="fnref2"
role="doc-noteref"><sup>2</sup></a></p>
<section id="custom-definitions" class="level3" data-number="2.1">
<h3 data-number="2.1"><span class="header-section-number">2.1</span>
Custom Definitions</h3>
<ul>
<li><span class="math inline">\(\bfG\)</span></li>
<li><span class="math inline">\(\mathbf{G}\)</span>, <span
class="math inline">\(\boldsymbol{G}\)</span></li>
<li><span class="math inline">\(\calA\)</span></li>
<li><span class="math inline">\(\bfdelta\)</span> <span
class="math inline">\(\boldsymbol{\delta}\)</span></li>
</ul>
</section>
<section id="lists-quotes" class="level3" data-number="2.2">
<h3 data-number="2.2"><span class="header-section-number">2.2</span>
Lists &amp; quotes</h3>
<ul>
<li>Unordered list item</li>
<li>Ordered list item: 1) first, 2) second</li>
</ul>
<blockquote>
<p>A short blockquote for typography testing.</p>
</blockquote>
</section>
<section id="some-paragraph" class="level3" data-number="2.3">
<h3 data-number="2.3"><span class="header-section-number">2.3</span>
Some paragraph <a name="paragraph1"></a></h3>
<p>The first <strong>paragraph</strong> text</p>
</section>
<section id="sub-paragraph" class="level3" data-number="2.4">
<h3 data-number="2.4"><span class="header-section-number">2.4</span> Sub
paragraph <a name="subparagraph1"></a></h3>
<p>This is a sub paragraph, formatted in heading 3 style</p>
</section>
</section>
<section id="another-paragraph" class="level2" data-number="3">
<h2 data-number="3"><span class="header-section-number">3</span> Another
paragraph <a name="paragraph2"></a></h2>
<p>The second paragraph text</p>
</section>
<section id="sec:sec1" class="level2" data-number="4">
<h2 data-number="4"><span class="header-section-number">4</span>
Figures</h2>
<section id="figure-1" class="level3" data-number="4.1">
<h3 data-number="4.1"><span class="header-section-number">4.1</span>
Figure 1</h3>
<figure id="fig:figure1">
<img src="/assets/img/blogs/800x400" alt="Figure 1: First figure" />
<figcaption aria-hidden="true">Figure 1: First figure</figcaption>
</figure>
</section>
<section id="figure-2" class="level3" data-number="4.2">
<h3 data-number="4.2"><span class="header-section-number">4.2</span>
Figure 2</h3>
<figure id="fig:figure2">
<img src="/assets/img/blogs/800x400" alt="Figure 2: Second figure" />
<figcaption aria-hidden="true">Figure 2: Second figure</figcaption>
</figure>
</section>
<section id="figure-3" class="level3" data-number="4.3">
<h3 data-number="4.3"><span class="header-section-number">4.3</span>
Figure 3</h3>
<figure id="fig:figure3">
<img src="/assets/img/blogs/800x400" alt="Figure 3: Third figure" />
<figcaption aria-hidden="true">Figure 3: Third figure</figcaption>
</figure>
</section>
<section id="unlabeled" class="level3" data-number="4.4">
<h3 data-number="4.4"><span class="header-section-number">4.4</span>
Unlabeled</h3>
<figure>
<img src="/assets/img/blogs/800x400" alt="Unlabelled image" />
<figcaption aria-hidden="true">Unlabelled image</figcaption>
</figure>
</section>
</section>
<section id="subfigure" class="level2" data-number="5">
<h2 data-number="5"><span class="header-section-number">5</span>
Subfigure</h2>
<figure id="fig:subfigures" class="subfigures">
<p><img src="/assets/img/blogs/800x400" id="fig:a" style="width:48.0%"
alt="a" /> <img src="/assets/img/blogs/800x400" id="fig:b" style="width:48.0%"
alt="b" /></p>
<figcaption><p>Figure 4: A subfigure group with two images. a — A, b —
B</p></figcaption>
</figure>
</section>
<section id="sec:sec2" class="level2" data-number="6">
<h2 data-number="6"><span class="header-section-number">6</span>
Equations</h2>
<section id="equation-part-1" class="level3" data-number="6.1">
<h3 data-number="6.1"><span class="header-section-number">6.1</span>
Equation part 1</h3>
<p>Display equations are labelled and numbered seen in Eq. <a
href="#eq:1">2</a>.</p>
<p><span id="eq:eqn1"><span class="math display">\[ P_i(x) = \sum_i a_i
x^i \qquad{(1)}\]</span></span></p>
<p>Since 0.1.6.0 those can also appear in the middle of paragraph</p>
<p><span id="eq:1"><span class="math display">\[
f(a)=\frac{1}{2i}\int_\gamma\frac{f(z)}{z-a}\,dz.
\qquad{(2)}\]</span></span> like this.</p>
<p>This line has <strong>inline math</strong> <span
class="math inline">\(E=mc^2\)</span> and should NOT be touched.</p>
<p><span><span class="math display">\[
a^2 + b^2 = c^2
\qquad{(3)}\]</span></span></p>
</section>
</section>
<section id="tables" class="level2" data-number="7">
<h2 data-number="7"><span class="header-section-number">7</span>
Tables</h2>
<section id="captionaing-tables" class="level3" data-number="7.1">
<h3 data-number="7.1"><span class="header-section-number">7.1</span>
Captionaing Tables</h3>
<div id="tbl:table1">
<table>
<caption>Table 1: Table example</caption>
<thead>
<tr>
<th style="text-align: left;">First Header</th>
<th style="text-align: left;">Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Content Cell</td>
<td style="text-align: left;">Content Cell</td>
</tr>
<tr>
<td style="text-align: left;">Content Cell</td>
<td style="text-align: left;">Content Cell</td>
</tr>
</tbody>
</table>
</div>
</section>
<section id="without-caption-tables" class="level3" data-number="7.2">
<h3 data-number="7.2"><span class="header-section-number">7.2</span>
Without Caption Tables</h3>
<p>Table without caption:</p>
<table>
<thead>
<tr>
<th style="text-align: left;">First Header</th>
<th style="text-align: left;">Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Content Cell</td>
<td style="text-align: left;">Content Cell</td>
</tr>
<tr>
<td style="text-align: left;">Content Cell</td>
<td style="text-align: left;">Content Cell</td>
</tr>
</tbody>
</table>
</section>
<section id="tables-in-latex-code" class="level3" data-number="7.3">
<h3 data-number="7.3"><span class="header-section-number">7.3</span>
Tables in Latex code</h3>

</section>
</section>
<section id="code-blocks" class="level2" data-number="8">
<h2 data-number="8"><span class="header-section-number">8</span> Code
blocks</h2>
<p>There are a couple options for code block labels. Those work only if
code block id starts with <code>lst:</code>,
e.g. <code>{#lst:label}</code></p>
<section id="sec:caption-attr" class="level3" data-number="8.1">
<h3 data-number="8.1"><span class="header-section-number">8.1</span>
<code>caption</code> attribute</h3>
<p><code>caption</code> attribute will be treated as code block caption.
If code block has both id and <code>caption</code> attributes, it will
be treated as numbered code block.</p>
<div id="lst:captionAttr" class="listing haskell">
<p>Listing 1: Listing caption</p>
<div class="sourceCode" id="cb1"><pre
class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="ot">main ::</span> <span class="dt">IO</span> ()</span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>main <span class="ot">=</span> <span class="fu">putStrLn</span> <span class="st">&quot;Hello World!&quot;</span></span></code></pre></div>
</div>
</section>
<section id="another-source-code" class="level3" data-number="8.2">
<h3 data-number="8.2"><span class="header-section-number">8.2</span>
Another source code</h3>
<div class="sourceCode" id="cb2"><pre
class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="kw">def</span> foo():</span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> <span class="st">&quot;bar&quot;</span></span></code></pre></div>
</section>
<section id="sec:table-capts" class="level3" data-number="8.3">
<h3 data-number="8.3"><span class="header-section-number">8.3</span>
Table-style captions</h3>
<p>Enabled with <code>codeBlockCaptions</code> metadata option. If code
block is immediately adjacent to paragraph, starting with
<code>Listing:</code> or <code>:</code>, said paragraph will be treated
as code block caption.</p>
<p>Listing: Listing caption</p>
<div id="lst:tableCaption" class="listing haskell">
<p>Listing 2: Listing Table</p>
<div class="sourceCode" id="cb3"><pre
class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="ot">main ::</span> <span class="dt">IO</span> ()</span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>main <span class="ot">=</span> <span class="fu">putStrLn</span> <span class="st">&quot;Hello World!&quot;</span></span></code></pre></div>
</div>
</section>
<section id="wrapping-div" class="level3" data-number="8.4">
<h3 data-number="8.4"><span class="header-section-number">8.4</span>
Wrapping div</h3>
<p>Wrapping code block without label in a div with id
<code>lst:...</code> and class, starting with <code>listing</code>, and
adding paragraph before code block, but inside div, will treat said
paragraph as code block caption.</p>
<div id="lst:wrappingDiv" class="listing haskell">
<p>Listing 3: Listing caption</p>
<div class="sourceCode" id="cb4"><pre
class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="ot">main ::</span> <span class="dt">IO</span> ()</span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a>main <span class="ot">=</span> <span class="fu">putStrLn</span> <span class="st">&quot;Hello World!&quot;</span></span></code></pre></div>
</div>
</section>
</section>
<section id="unnumbered-chapter." class="level2 unnumbered">
<h2 class="unnumbered">Unnumbered chapter.</h2>
<p>This chapter doesn’t change chapter prefix of referenced elements,
instead keeping number of previous chapter, e.g.</p>
</section>
<section id="crossref" class="level2" data-number="9">
<h2 data-number="9"><span class="header-section-number">9</span>
Crossref</h2>
<p>This is a demo file for pandoc-crossref. With this filter, you can
cross-reference:</p>
<ul>
<li>Cross-reference <strong>figures</strong>,
<strong>equations</strong>, <strong>tables</strong>,
<strong>sections</strong>, and <strong>code blocks</strong> (e.g.,
Fig. <a href="#fig:figure1">1</a>, Eq. <a href="#eq:eqn1">1</a>,
Table <a href="#tbl:table1">1</a>, Section <a href="#sec:sec1">1.4</a>,
lst. <a href="#lst:captionAttr">1</a>).</li>
<li>Reference prefixes can be capitalized (<code>@Fig:figure1</code>),
and in multi-refs the first prefix sets the style.</li>
<li>You can mix reference types (figures, tables, code, etc.); mixing
with normal citations works but isn’t recommended.</li>
<li>Custom section labels (e.g., <code>@sec:custlabs</code>) and
<strong>subfigures</strong> (Fig. <a href="#fig:subfigures">4</a>) are
supported.</li>
</ul>
<section id="citations" class="level3" data-number="9.1">
<h3 data-number="9.1"><span class="header-section-number">9.1</span>
Citations</h3>
<ul>
<li>Example inline citation<span class="citation"
data-cites="dixon1971brief"><sup><a href="#ref-dixon1971brief"
role="doc-biblioref">1</a></sup></span></li>
<li>Example placeholder citation for an online resource<span
class="citation" data-cites="online"><sup><a href="#ref-online"
role="doc-biblioref">2</a></sup></span></li>
</ul>
</section>
<section id="links" class="level3" data-number="9.2">
<h3 data-number="9.2"><span class="header-section-number">9.2</span>
Links</h3>
<ul>
<li>Inline link to local path: <a href="/url">inline link</a></li>
<li>Link with title: <a href="https://fsf.org"
title="click here for a good time!">Free Software Foundation</a></li>
</ul>
<div id="refs" class="references csl-bib-body" data-entry-spacing="0"
data-line-spacing="2" role="list">
<div id="ref-dixon1971brief" class="csl-entry" role="listitem">
<div class="csl-left-margin">1. </div><div
class="csl-right-inline">Dixon, J. D. A brief proof of cauchy’s integral
theorem. <em>Proceedings of the American Mathematical Society</em>
<strong>29</strong>, 625–626 (1971).</div>
</div>
<div id="ref-online" class="csl-entry" role="listitem">
<div class="csl-left-margin">2. </div><div
class="csl-right-inline">Wikibooks. Generating bibliographies with
biblatex and biber. <a
href="https://en.wikibooks.org/wiki/LaTeX/Generating_Bibliographies_with_biblatex_and_biber">https://en.wikibooks.org/wiki/LaTeX/Generating_Bibliographies_with_biblatex_and_biber</a>
(2016).</div>
</div>
</div>
</section>
</section>
<section id="footnotes" class="footnotes footnotes-end-of-document"
role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>Here is the footnote.<a href="#fnref1"
class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn2"><p>Here’s one with multiple blocks.<a href="#fnref2"
class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>
