---
layout: posts
title: AI for Robust Manufacturing
description: Developed Bayesian optimization models that turn process variability into smarter manufacturing decisions.
img: assets/reports/pvd_bayesian_optimization/Picture1.jpg
importance: 4
category: Probabilistic Modeling
tags: [Materials, Bayesian Optimization, Optimization, Active Learning]
related_publications: true
non_preview: true
date: 2024-05-01
# github: https://github.com/ashriva16/bayesian-optimization-sputter-deposition
# toc:
#   sidebar: right
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

This project shows how Bayesian optimization can accelerate semiconductor manufacturing by reducing trial-and-error. By focusing exploration on uncertain yet promising regions, we identified process conditions that produced stable molybdenum (Mo) coatings with both low stress and controlled resistance, even under natural variability. The result: faster, more reliable pathways to robust chip manufacturing.

## The Challenge of Semiconductor Material Design

> In chip manufacturing, even the smallest instability in a layer can ripple into million-dollar losses.

During the manufacturing of semiconductor chips, even the slightest variation in details can determine whether a chip supports the next generation of devices or fails before it leaves the fab.
Materials used in chips must meet multiple, often conflicting requirements: electrical performance, mechanical stability, manufacturability, and reliability.
Optimizing for one property in isolation, such as low resistance, can inadvertently worsen another, such as layer instability, which in turn can cause defects or premature failure.

When the design criteria aren't appropriately chosen, the costs ripple across entire industries:

- ⚡ **Yield crashes in fabs**: In 2019, TSMC, the world's largest chipmaker, lost an estimated $550 million when a chemical contamination reduced wafer yields across multiple advanced nodes, {% cite tsmc2019 --file externals%}

- 💾 **Consumer device recalls**: In 2010, defective chips used in certain Intel chipsets caused data corruption and system instability, forcing Intel into a $700 million recall and replacement program, {% cite intel2010 --file externals%}

## Finding the Sweet Spot: Smarter Trade-offs in Chip Manufacturing

> Every knob combination in the fab can yield multiple outcomes; the goal is to find the sweet spot.

Modern semiconductor processes involve multiple interdependent variables, including deposition power and chamber pressure, as well as gas chemistry and temperature.
Adjusting one knob often changes multiple outcomes, sometimes in conflicting ways.
For example, in the deposition of molybdenum (Mo) barrier layers, increasing power during sputtering improves conductivity but also raises internal film stress, which can make layers prone to cracking {% cite vink1991 %}.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
 loading="lazy"
 path="assets/reports/pvd_bayesian_optimization/deposition.png"
 title="Cross-section drawing of key atomistic processes involved in sputtering, transport, and film growth"
 class="img-fluid rounded z-depth-1 w-75 mx-auto d-block" %}
    </div>
</div>

<div class="caption text-center">
 Cross-section drawing of key atomistic processes involved in sputtering, transport, and film growth
</div>

Traditionally, engineers have navigated these trade-offs through design of experiments (DoE) or intuition, testing a limited number of process conditions and hoping to find an acceptable balance.
But as manufacturing complexity grows, this trial-and-error approach has become too slow and too costly. The real challenge is to reduce the search process and find optimum conditions quickly while still ensuring stability and reliability.

## AI-Guided Optimization for Reliable Semiconductor Coatings

AI is reshaping manufacturing by replacing slow trial-and-error with faster, smarter decision-making.
In semiconductors, this means finding reliable process conditions with fewer tests and quicker results.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
 loading="lazy"
 path="assets/reports/pvd_bayesian_optimization/Picture1.jpg"
 title="overview image"
 class="img-fluid rounded z-depth-1 w-75 mx-auto d-block" %}
    </div>
</div>
<span class="caption">
 Overview of the approach, refer to paper {% cite 10.1116/6.0003418 %} for details.
</span>

> By learning where it is uncertain, the model knows exactly where to explore next.

In this work, we developed an AI model based on a Bayesian optimization framework to fine-tune sputter deposition conditions. Specifically, we optimized power and pressure to balance electrical performance (sheet resistance) and mechanical stability (residual stress) in molybdenum (Mo) thin films, while ensuring robustness against natural process variability. By combining performance and stability in the objective function, the model efficiently explored the design space and identified stable configurations.

After each trial, the model predicts which settings are promising and also shows where it is still uncertain.
This uncertainty is not a drawback; instead, it guides exploration into new regions of the process space while refining areas that already look good.
In this way, the search quickly converges on the best options without wasting time.

<figure>
  <img src="/assets/reports/pvd_bayesian_optimization/gp.gif"
       class="img-fluid rounded z-depth-1 w-60 mx-auto d-block"
       alt="Gaussian process fit"
       loading="lazy">
</figure>
<span class="caption">
 Gaussian fit over the multi-objective landscape.
</span>

The plots above show how the model learns the landscape:

- Predictions reveal likely values for stress and resistance.

- Uncertainty highlights regions where the model needs more data.

- Exploration directs attention to those uncertain areas, while still focusing on the most promising results.

Through this process, we identified deposition conditions that consistently produced low stress and controlled resistance, even under process variability.

## Further read

- 📂 [GitHub Repository](https://github.com/ashriva16/bayesian-optimization-sputter-deposition)
- 📄 [Complete Article](https://doi.org/10.1116/6.0003418)
