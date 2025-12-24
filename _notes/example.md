---
title: "Example Document Title"
subtitle: "Example Subtitle"
author:
  - "Jane Doe"
  - "John Smith"
abstract: "This is an example abstract summarizing the contents of the document."
keywords:
  - "example"
  - "metadata"
  - "pandoc"
subject: "Example Subject"
description: "A short example description of the document."
bibliography: "bibliography.bib"
external_metadata: post.meta.yml
---

## Introduction

**Hello** :smile:

## Text features

- This ~~is deleted text.~~
- _Italic_, **bold**, and `code` text
- Default highlight with `==highlight==`: ==this is highlighted==
- Pink highlight via raw HTML: <mark style="background:#ffc0cb;">this is pink</mark>
- Blue font via raw tex: \textcolor[HTML]{1e90ff}{this text is blue}
- Blue font via raw HTML: <span style="color:#1e90ff;">this text is blue</span>
- Black highlight with yellow text: <mark style="background:black;color:yellow">contrast demo</mark>

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

### Custom Definitions

- $\bfG$
- $\mathbf{G}$, $\boldsymbol{G}$
- $\calA$
- $\bfdelta$ $\boldsymbol{\delta}$

\begin{lemma}
This is an example of a definition. The word "Definition" is bold, and the text of the definition is in standard, roman (non-italic) type, {Link: according to the amsthm documentation https://texdoc.org/serve/amsthm/0} [6, 7].
\end{lemma}

### Lists & quotes

- Unordered list item
- Ordered list item: 1) first, 2) second

> A short blockquote for typography testing.

### Some paragraph <a name="paragraph1"></a>

The first **paragraph** text

### Sub paragraph <a name="subparagraph1"></a>

This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>

The second paragraph text

## Figures {#sec:sec1}

### Figure 1

![First figure](/assets/img/blog/800x400.png){#fig:figure1}

### Figure 2

![Second figure](/assets/img/blog/800x400.png){#fig:figure2}

### Figure 3

![Third figure](/assets/img/blog/800x400.png){#fig:figure3}

### Unlabeled

![Unlabelled image](/assets/img/blog/800x400.png)

## Subfigure

::: {#fig:subfigures}
![A](/assets/img/blog/800x400.png){#fig:a width=48%}
![B](/assets/img/blog/800x400.png){#fig:b width=48%}

A subfigure group with two images
:::

## Equations {#sec:sec2}

### Equation part 1

Display equations are labelled and numbered seen in @eq:1.

$$ P_i(x) = \sum_i a_i x^i $$ {#eq:eqn1}

Since 0.1.6.0 those can also appear in the middle of paragraph

$$
f(a)=\frac{1}{2i}\int_\gamma\frac{f(z)}{z-a}\,dz.
$${#eq:1} like this.

This line has **inline math** $E=mc^2$ and should NOT be touched.

\begin{align}
a^2 + b^2 = c^2
\end{align}

## Tables

### Captionaing Tables

| First Header | Second Header |
| :----------- | :------------ |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

: Table example {#tbl:table1}

### Without Caption Tables

Table without caption:

| First Header | Second Header |
| :----------- | :------------ |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

### Tables in Latex code

\begin{tabular}{|l|l|}\hline
Age & Frequency \\ \hline
18--25 & 15 \\
26--35 & 33 \\
36--45 & 22 \\ \hline
\end{tabular}

## Code blocks

There are a couple options for code block labels. Those work only if code block id starts with `lst:`, e.g. `{#lst:label}`

### `caption` attribute {#sec:caption-attr}

`caption` attribute will be treated as code block caption. If code block has both id and `caption` attributes, it will be treated as numbered code block.

```{#lst:captionAttr .haskell caption="Listing caption"}
main :: IO ()
main = putStrLn "Hello World!"
```

### Another source code

```python
def foo():
    return "bar"
```

### Table-style captions {#sec:table-capts}

Enabled with `codeBlockCaptions` metadata option. If code block is immediately
adjacent to paragraph, starting with `Listing: ` or `: `, said paragraph will be
treated as code block caption.

Listing: Listing caption

<div id="lst:tableCaption" class="listing">
Listing Table
```{.haskell}
main :: IO ()
main = putStrLn "Hello World!"
```
</div>

### Wrapping div

Wrapping code block without label in a div with id `lst:...` and class, starting with `listing`, and adding paragraph before code block, but inside div, will treat said paragraph as code block caption.

<div id="lst:wrappingDiv" class="listing">
Listing caption
```{.haskell}
main :: IO ()
main = putStrLn "Hello World!"
```
</div>

## Unnumbered chapter. {-}

This chapter doesn't change chapter prefix of referenced elements, instead keeping number of previous chapter, e.g.

## Crossref

This is a demo file for pandoc-crossref. With this filter, you can cross-reference:

- Cross-reference **figures**, **equations**, **tables**, **sections**, and **code blocks** (e.g., [@fig:figure1], @eq:eqn1, [@tbl:table1], [@sec:sec1], [@lst:captionAttr]).
- Reference prefixes can be capitalized (`@Fig:figure1`), and in multi-refs the first prefix sets the style.
- You can mix reference types (figures, tables, code, etc.); mixing with normal citations works but isn’t recommended.
- Custom section labels (e.g., `@sec:custlabs`) and **subfigures** ([@fig:subfigures]) are supported.

### Citations

- Example inline citation [@dixon1971brief]
- Example placeholder citation for an online resource [@online]

### Links

- Inline link to local path: [inline link](/url)
- Link with title: [Free Software Foundation](https://fsf.org "click here for a good time!")
$$
