---
layout: posts
title: AI Abstractions of Material Evolution
description: I compared PCA, autoencoders, and diffusion maps to evaluate how well they capture and compress microstructure evolution, revealing the trade-offs between accuracy, smoothness, and efficiency.
img: assets/reports/microstructure_latent_model/highlight.png
importance: 3
category: Deep Learning
tags: [Dimensionality reduction]
related_publications: true
non_preview: true
date: 2023-04-01
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white"/>
  <img src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white"/>
  <img src="https://img.shields.io/badge/SciPy-8CAAE6?style=flat&logo=scipy&logoColor=white"/>
  <img src="https://img.shields.io/badge/Matplotlib-11557c?style=flat&logo=plotly&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"/>
</p>

Materials don't stay the same after they're made; they evolve under heat, stress, and environment.
In this work, I explore how we can capture that evolution using microscopic fingerprints, and how dimensionality reduction methods like PCA, autoencoders, and diffusion maps balance accuracy, efficiency, and interpretability.
The study shows that there is no one-size-fits-all solution. Instead, the choice of method depends on the trade-offs we are willing to make.

## Material Evolution: Small Changes, Big Consequences

> ⚠️ Why it matters: From turbine failures to battery fires, overlooking how microstructures evolve can turn into safety risks and financial losses.

In materials science, it's not only the initial state after manufacturing that matters; it's how the material evolves over time under real-world conditions.
Suppose we fail to capture this evolution accurately. In that case, engineering designs may appear reliable on paper or even perform well at first. Still, under prolonged use or harsh environments, they can ultimately fail in unexpected and costly ways. Some of the real-world consequences can be:

- ✈️ **Aerospace:** In jet engines, the internal structure of alloys slowly changes under extreme heat. If not predicted correctly, this weakens critical parts, raising the risk of engine failure and costly fleet downtime.
- 🔋 **Energy storage:** In batteries, tiny needle-like structures can grow during charging. Left unchecked, they can puncture internal barriers, causing short circuits, fires, and expensive recalls.
- 💾 **Semiconductors:** In chip manufacturing, thin films can evolve unpredictably during deposition. This leads to yield losses worth tens of millions of dollars in wasted wafers.

That's why it's critical to characterize materials not only by their properties at a single point in time, but also by how those properties evolve as the material ages or operates in real environments.

## Characterizing Material Evolution using Fingerprints

> Behind every engine, battery, or chip lies a hidden story: the way its microscopic structures evolve over time.

To truly understand how a material changes under heat, stress, or chemical exposure, we need to study its microscopic fingerprints, the microstructures made up of grains, phases, and defects that govern how the material behaves over time.

These microstructures don't stay static; they evolve through processes such as **spinodal decomposition**, **dendritic growth**, and **grain growth**, each of which can significantly alter material performance.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
      loading="lazy"
      path="assets/reports/microstructure_latent_model/examples.png"
      title="Simulated examples of spinodal decomposition, dendritic growth, and grain evolution"
      class="img-fluid rounded z-depth-1 w-50 mx-auto d-block" %}
  </div>
</div>
<span class="caption">
 Simulated examples of spinodal decomposition, dendritic growth, and grain evolution.
</span>

By capturing these microscopic fingerprints, we gain a way to describe how materials age, transform, and sometimes fail.
But microstructure data is massive and complex: millions of pixels, countless patterns, and long timescales.
To make these fingerprints useful for prediction and decision-making, we need a way to compress them into simpler, more manageable forms without losing the essence of the physics.

## Simplifying Fingerprints with Dimensionality Reduction

Machine learning has become a powerful tool for connecting processing, structure, and properties by treating microstructure evolution as a pattern recognition problem.
Instead of working with overwhelming high-dimensional data directly, these methods create low-dimensional fingerprints, or latent variables, that summarize the essential features of microstructural change.

A critical aspect of low-dimensional fingerprints is the smoothness of their evolution, which faithfully represents how microstructures change over time.
This smoothness is essential when treating microstructure evolution as a pattern recognition problem, where models need to capture trends and dynamics rather than just isolated snapshots.

In this study, we formally compared principal component analysis, autoencoders, and diffusion maps to evaluate how well they capture microstructure evolution in a low-dimensional representation, using metrics for accuracy, data compression, and latent trajectory smoothness.
These methods illustrate the core trade-off between compression and trajectory smoothness:

- **Autoencoders:** strong reconstructions, high compression, but less smooth trajectories.
- **Diffusion maps:** smoother trajectories, comparable accuracy, but lower compression.
- **PCA:** no significant advantage over the other two.

> **Key Takeaway:**
> ⚖️ The value lies not in one perfect method, but in choosing the right balance of accuracy, efficiency, and interpretability for each problem.

By applying these criteria before deploying downstream machine-learning models, researchers can select dimensionality reduction methods that not only compress data effectively but also preserve the essential physics of microstructure evolution.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid
      loading="lazy"
      path="assets/reports/microstructure_latent_model/highlight.png"
      title="overview image"
      class="img-fluid rounded z-depth-1 w-50 mx-auto d-block" %}
  </div>
</div>
<span class="caption">
 Refer to paper {% cite desai2023 %} for details.
</span>

## Further Read

- 📂 [GitHub Repository](https://github.com/ashriva16/latent-space-evolution)
- 📄 [Complete Article](https://doi.org/10.1016/j.actamat.2023.119514)
