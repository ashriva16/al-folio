---
layout: posts
title: AI-driven Material Property Prediction
subtitle: Predicting stress hotspots in materials 448× faster with deep learning
description: Here, I show how structural fingerprints captured in images can be used with a convolutional machine learning model to predict and explain material behavior.
img: assets/reports/microstrcture_encoder_decoder/highlight.png
importance: 2
category: Deep Learning
tags: [Convolutional Neural Networks, Material Science]
related_publications: true
non_preview: true
date: 2020-08-01
# toc:
#   sidebar: right
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white"/>
  <img src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white"/>
  <img src="https://img.shields.io/badge/SciPy-8CAAE6?style=flat&logo=scipy&logoColor=white"/>
  <img src="https://img.shields.io/badge/Matplotlib-11557c?style=flat&logo=plotly&logoColor=white">
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"/>
</p>

This project presents a deep learning approach to predict stress hotspots in polycrystalline microstructures. By linking material fingerprints with AI, we demonstrate how convolutional encoder–decoder models can identify failure-prone regions 448 times faster than numerical solvers. This method bridges traditional physical laws with modern machine learning, enabling safer and more reliable material design. The significance of this research lies in its potential to save lives and prevent financial losses from material failures.

## Beyond Design: The Hidden Cost of Material Failure

> ⚠️ **Why it matters:** From fractured ships to wafer losses worth millions, predicting material behavior saves lives and money.

In engineering — whether in aerospace, semiconductors, or civil structures — it's not only the design that matters, but also how the material itself performs.
Ignoring material performance can lead to safety issues, high costs, and unexpected downtime.
For example,

- manufacturing defect in a single gear tooth grounded fleets, caused loss of life, and exposed enormous reputational and financial risk {% cite aerospace_failure --file externals%}.
- In semiconductors, material defects can cause losses—tens of millions of dollars in wasted wafers {% cite semiconductor_defects --file externals%}.

Hence, predicting material behavior is not just a research challenge but a business necessity.

<figure class="row justify-content-center my-4">
  <div class="col-sm-10 col-md-8">
    {% include figure.liquid
    loading= "lazy"
    path="assets/reports/microstrcture_encoder_decoder/ship_failure.jpg"
    title= "Failure of large-scale structures due to material defects"
    class="img-fluid rounded z-depth-1 w-75 mx-auto d-block" %}
  </div>
  <figcaption class="caption" markdown="1">
  Liberty Ship *Schenectady* fractured from deck to keel.
  Reproduced with permission from {% cite shipfail --file externals %}.
  </figcaption>
</figure>

## When Material Fingerprints Decide the Price of Failure

What really decides whether a material is strong, weak, or durable? The answer lies in its microscopic fingerprints, called microstructures.
At first glance, a material may look uniform, but hidden inside are patterns far too small to see with the naked eye.
These patterns emerge from the way atoms, grains, and different regions (phases) are arranged within the material.
That internal distribution directly shapes the material's strength, durability, and overall performance. For example:

- Grain size and strength (Hall–Petch relationship): Materials with smaller grains are usually stronger, because grain boundaries act like barriers that block movement inside the material.
- Mix of regions (phase distribution): The balance between softer and harder regions influences whether a material is rigid, bendable, or brittle.
- Tiny defects (fracture mechanics): Even minor flaws, such as pores or cracks, can concentrate stress. Over time, these weak spots grow and eventually lead to failure.
- Grain direction (anisotropy): When grains line up in specific directions, the material becomes stronger one way and weaker another — much like wood, which splits more easily along the grain than across it.

The question then becomes: how do we turn these invisible fingerprints into reliable predictions? The answer lies in harnessing the power of artificial intelligence to connect internal structure to observable behavior.

## Bridging Fingerprints and Behavior with AI

Engineers and materials scientists have long relied on such physical laws and empirical relationships to connect microstructure with behavior.
With the advent of Artificial Intelligence (AI), we can now quickly predict material behavior from their structural fingerprints, saving time, cutting costs, and enabling the design of safer and more reliable technologies.
In this work, we developed a method to **predict peak-stress clusters in polycrystalline microstructures** subjected to macroscopic strain.

- 🧠 **Step 1 — Stress field prediction:** A Convolutional Encoder–Decoder (CED) model was trained on `7,000` microstructure samples to predict stress fields.
- 📍 **Step 2 — Peak detection:** We combined a peak detection algorithm with connected-component labeling to identify stress hotspot clusters in the predicted fields.
- 📊 **Validation:** The model was tested on `2,000` microstructures (each of size `128×128` pixels). Predictions were compared against ground-truth numerical simulations using mean squared error for stress fields and cosine similarity for cluster accuracy.
- ⚡ Efficiency: The machine learning approach was found to be `~448×` faster than traditional numerical solvers, while maintaining high accuracy in both stress fields and cluster geometry. This remarkable speed and efficiency demonstrate the power of AI in material science.

👉 This demonstrates how deep learning can serve as a fast, reliable tool for identifying critical stress hotspots in complex material microstructures, with promising applications in material design and failure prevention.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
 {% include figure.liquid
 loading= "lazy"
 path="assets/reports/microstrcture_encoder_decoder/highlight.png"
 title= "Proposed encoder decoder architecture with Saliency mapping"
 class="img-fluid rounded z-depth-1 w-75 mx-auto d-block" %}
    </div>
</div>

<span class="caption">
 Overview of the approach, refer {% cite doi:10.1177/10812865211055504%} for more details.
</span>

## Further read

- 📂 [GitHub Repository](https://github.com/ashriva16/Peak_Stress_in_Microstructures)
- 📄 [Complete Article](https://journals.sagepub.com/doi/full/10.1177/10812865211055504)
