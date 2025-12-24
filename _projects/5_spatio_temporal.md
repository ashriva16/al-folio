---
layout: posts
title: AI for Faster Physics Simulations
description: Built a physics-informed AI model that refines coarse simulations in space and time, making them faster, accurate, and physics-consistent
img: assets/reports/spatio_temporal/Picture3.png
importance: 5
category: Deep Learning
tags: [PINNS, Finite Element Method]
related_publications: true
non_preview: true
date: 2022-10-01
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

We showed how combining AI with physics-based simulation can accelerate and improve the safety of engineering design.
Traditional simulations are slow and costly, but AI can learn complex patterns and scale well on GPUs.
By creating a physics-informed deep learning framework, we improved simulation accuracy while cutting time and data needs.
This approach helps engineers design reliable structures more quickly and at lower cost.

## Engineering Dynamics: The Key to Safe and Smart Design

> ⚠️ "One mistake during design can turn into a billion-dollar loss, or worse, cost lives."

From tiny semiconductors to massive structures, reliability depends on how they respond over space and time under extreme conditions (their dynamics).
Engineers rely on computer simulation to anticipate how structures will respond under real-world conditions.
Without advanced simulation, it is nearly impossible to anticipate how structures respond under rare conditions like extreme winds or earthquakes.
For example, the Tacoma Narrows Bridge collapse (1940), just months after opening, was caused by a dynamic instability that engineers failed to model.
The result was the loss of a $6.4M asset (about $120M today), and a turning point that reshaped how infrastructure is designed and tested.
This shows why precise simulations are essential for making engineering safe and reliable.

<div class="row">
  <div class="col-12 col-md-10 col-lg-8 mx-auto">
    {% include video.liquid
 path="https://www.youtube.com/embed/KRutAt0FlGA"
 height="400px"
 class="w-100 rounded z-depth-1" %}
  </div>
</div>
<span class="caption" markdown="1">
 Tacoma Narrows Bridge.
</span>

## The Computational Price of Precision

> ⏳ The more precise the simulation, the heavier the price in time and computing power.

High-fidelity simulations are powerful, but to capture fine details across space and time, simulations solve complex equations at every time step and every point in a structure.
Often, the structures under study are massive, and simulations need to capture their behavior across long timescales, making them highly time-consuming and demanding enormous computing power.
Such simulations can take days or even weeks to complete and often require access to significant computing clusters.
To manage this, engineers are forced into tradeoffs where they either compromise on accuracy or accept rising costs and delays that slow innovation and decision-making.

<div class="row text-center">
  <div class="col-md-4">
    <img src="/assets/reports/spatio_temporal/aeroplane.webp"
         width="100%" height="auto"
         style="height:250px; object-fit:contain;"
         title="Aircraft Dynamics" loading="eager">
  </div>

  <div class="col-md-4">
    <img src="/assets/reports/spatio_temporal/bridge.webp"
         width="100%" height="auto"
         style="height:250px; object-fit:contain;"
         title="Bridge Dynamics" loading="eager">
  </div>

  <div class="col-md-4">
    <img src="/assets/reports/spatio_temporal/building.webp"
         width="100%" height="auto"
         style="height:250px; object-fit:contain;"
         title="Building Dynamics" loading="eager">
  </div>
</div>
<span class="caption" markdown="1">
 Dynamics simulations of (from left to right): an aircraft wing{% cite dlr_wing --file externals%}, a suspension bridge{% cite strand7_bridge --file externals%}, and a high-rise building{% cite asi_collapse --file externals%}.
</span>

## The Future of Modeling: AI + Simulation Together

> 🤝 AI brings speed, simulations bring trust; together, they can redefine engineering design.

Recent AI models have demonstrated the ability to learn complex relationships and can scale efficiently with modern GPUs.
One approach is to train AI models on high-fidelity simulations and then use them as surrogates to replace costly simulations.
However, pure AI models are often less accurate than the simulations they emulate and may drift from the underlying physics.
A better option is to integrate AI with simulations in a hybrid approach, where simulations predict solutions at a coarse scale and AI refines them, or AI provides rapid approximations that simulations then correct and enforce with underlying physics.

In this work, we built a physics-informed deep learning framework that can take rough, low-resolution simulations and sharpen them in both space and time, without needing expensive high-resolution training data.
The idea is simple: one network enhances spatial detail, and another improves temporal resolution.
To keep everything physically consistent, we designed a composite loss that enforces the governing equations, boundary and initial conditions, and consistency across time steps.

When applied to elastodynamics, the approach delivered high accuracy while respecting the physics, while reducing computation and data requirements.
In short, it's a step toward faster, more reliable scientific simulations and design workflows.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
 loading="lazy"
 path="assets/reports/spatio_temporal/Picture3.png"
 title="overview image"
 class="img-fluid rounded z-depth-1 w-75 mx-auto d-block" %}
    </div>
</div>
<span class="caption">
 Overview of the approach. Refer to the paper {% cite arora2022spatiotemporalsuperresolutiondynamicalsystems %} for details.
</span>

## Further read

<!-- - 📂 [GitHub Repository](https://github.com/ashriva16/Peak_Stress_in_Microstructures) -->

- 📄 [Slides](https://www.osti.gov/servlets/purl/2430740#page=1.00&gsr=0)
- 📄 [Complete Article](https://arxiv.org/pdf/2212.04457)
