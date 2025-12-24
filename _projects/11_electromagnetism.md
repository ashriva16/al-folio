---
layout: posts
title: Scalable Computing for HVDC Grounding
description: Implemented MPI-based parallelization within the Method of Moments to accelerate the modeling for large HVDC grounding electrodes, achieving up to 6× speed-up.
img: assets/reports/electromagnetics/hvdc.webp
importance: 11
category: High Performance Computing
related_publications: true
non_preview: true
math: true
tags:
  - Computational Electromagnetics
  - MPI
  - Numerical Methods
  - Power Systems
date: 2016-11-01
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white"/>
  <img src="https://img.shields.io/badge/MPI-0081CB?style=flat&logo=openmpi&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"/>
  <img src="https://img.shields.io/badge/Matplotlib-11557C?style=flat&logo=plotly&logoColor=white"/>
</p>

This work introduces a parallel Galerkin Method of Moments (MoM) framework for accurately evaluating the resistance of large HVDC grounding electrodes.
Traditional analytical or domain-based numerical methods struggle with the kilometer-scale geometries and soil variability involved in real HVDC installations.
By discretizing only the electrode surface and employing MPI-based parallel computation, the method achieves high precision with substantially reduced computational cost.
Validated on star and ring electrode systems, the approach demonstrates excellent agreement with analytical values.
It achieves a five-to-sixfold speed-up, making it a practical tool for large-scale computational electromagnetics (CEM) problems in power systems.

## High Voltage Direct Current Transmission: A Superhighway Powering the Next Generation of Energy Networks

<p id="fig-retina"></p>
<div class="row justify-content-center my-3">
  <div class="col-sm-10 col-md-8">
    {% include figure.liquid
 loading="lazy"
 path="assets/reports/electromagnetics/hvdc.webp"
 title="HVDC"
 class="img-fluid rounded z-depth-1 shadow-sm w-100 mx-auto d-block"
    %}
    <span class="caption d-block text-center mt-2" markdown="1">
    Illustration of an HVDC transmission system. Source: [AllumiaX](https://www.allumiax.com/blog/high-voltage-direct-current-hvdc-transmission).
    </span>
  </div>
</div>

The rise of High Voltage Direct Current (HVDC) transmission marks a significant transformation in modern power engineering.
As electricity generation, transmission, and distribution systems in India and across the world modernize, they demand higher efficiency, reliability, and grid stability.
HVDC technology directly addresses these challenges by offering precise control of power flow, lower transmission losses, and the ability to stably connect remote networks.

HVDC links are primarily employed to transmit electricity from remote hydro, solar, and wind generation sites to major demand centres through long-distance, submarine, and cross-border interconnectors, enabling:

- **Stable Power Supply**: Balances and combines power from multiple generation sources, allowing interconnection between asynchronous and distant regional grids to ensure a continuous and reliable supply even under varying demand or renewable output.
- **Support for Storage and Electrification**: Enables integration of DC-based microgrids, large-scale energy storage systems, and electric vehicle charging networks.
- **Renewable Integration**: Efficiently connects remote solar, wind, and hydro generation sites with population and industrial centres, promoting cleaner and sustainable power distribution.

### Why DC for High Voltage?

Although AC transmission has long dominated power networks due to the simplicity of voltage transformation using conventional transformers.

> **Recall — To understand high voltage transmission, consider how power and loss scale with voltage and current**
>
> In high-voltage lines, power follows:
>
> $$
> P = V \times I
> $$
>
> For a given power level, increasing the voltage $V$ reduces the current $I$.
> Since power loss varies as $I^2 R$, **doubling the voltage cuts resistive losses by a factor of four.**
> {:.callout .callout-note}

However, AC system efficiency declines over long distances and underwater routes because of several inherent effects:

- Skin Effect: Current tends to flow near the surface of the conductor, effectively increasing resistance and losses.
- Eddy and Hysteresis Losses: Energy is dissipated in the magnetic materials surrounding AC lines and cores.
- Reactive and Dielectric Losses: Part of the energy oscillates between electric and magnetic fields instead of being transmitted as useful power.

<div class="row">
  <div class="col-12 col-md-10 col-lg-8 mx-auto">
    {% include video.liquid
 path="https://www.youtube.com/embed/JH9-0AbR_1U?start=1"
 height="400px"
 class="w-100 rounded z-depth-1" %}
  </div>
</div>

<span class="caption" markdown="1">
 Watch an overview of HVDC interconnectors — their advantages, challenges, and real-world applications across global power networks.
</span>

These limitations, combined with advancements in semiconductor and power electronic technologies, have made DC transmission inherently more efficient and controllable for long-distance power transfer.
With the growing adoption of HVDC systems, attention has also turned toward the design and optimization of key components such as converter stations, transmission lines, and **grounding electrodes** to ensure reliable and efficient operation under diverse conditions.

## Closing the Loop: The Role of Grounding Electrodes in HVDC

In any electrical system, current must complete a closed circuit, and it always needs a path to return to its source.
In HVDC transmission, particularly mono-polar and homopolar systems, this return path is achieved through grounding, using electrodes designed to suit the system configuration and soil conditions.
These electrodes safely transfer current to or from the earth, maintaining voltage balance and protecting nearby equipment.

Electrodes are typically installed several kilometers away from converter stations and arranged in geometries such as vertical rods, rings, or star-shaped networks.
This layout ensures that the injected or collected current spreads uniformly through the surrounding soil, preventing high potential gradients and minimizing corrosion effects.
The entire electrode system can extend over 1–3 km in radius or several square kilometers for large-capacity HVDC links, depending on the power rating and local soil resistivity.

Traditional analytical and empirical formulas were developed only for simple electrode shapes (like a single vertical rod) and often deviated significantly from measured values.
Modern HVDC electrodes (rings, stars, or other geometries), however, are large and complex, interacting with vast soil volumes whose resistivity varies with environmental conditions.
For such systems, 3D modeling with the Finite Element Method (FEM) becomes computationally intensive, motivating the use of more efficient computational electromagnetic methods (CEM) such as the Method of Moments (MoM)..

## A Parallelized Method of Moments for Electrode Design

The Method of Moments (MoM), a boundary-based CEM technique, addresses existing challenges faced with FEM by discretizing only the electrode surface rather than the entire soil domain.
This significantly reduces computation cost while maintaining high accuracy in modeling self and mutual resistances, air–soil interface effects, and complex geometries.

We developed a Galerkin MoM-based computational approach for estimating the resistance of HVDC grounding electrodes.
By calculating the self and mutual resistances between these segments using Green's functions, the total electrode resistance can be determined with high precision.
The method was improved further by:

- Using pulse basis functions (instead of delta functions) for better numerical stability,
- Incorporating the method of images to model the air–soil interface, and
- Employing parallel computation (MPI) to handle large electrode systems efficiently.

This approach was applied to evaluate real-world electrode configurations such as the six-point star and ring systems used in existing HVDC projects.
The computed resistances showed excellent agreement with analytical and measured values, while the parallelized implementation achieved a five-to-sixfold reduction in computation time compared to sequential runs.

Together, these results demonstrate that the Galerkin-based MoM provides a fast and accurate way to simulate large-scale HVDC grounding systems, making it well-suited for modern electrode design and optimization.

<p id="fig-retina"></p>
<div class="row justify-content-center my-3">
  <div class="col-sm-10 col-md-8">
    {% include figure.liquid
 loading="lazy"
 path="assets/reports/electromagnetics/Picture14.png"
 title=" Ring and star electrode with the image conductors"
 class="img-fluid rounded z-depth-1 shadow-sm w-100 mx-auto d-block"
    %}
    <span class="caption d-block text-center mt-2" markdown="1">
   Ring and star electrode systems with their image conductors. To read in more detail, refer to {%cite muhammed2021parallel --file papers%}.
    </span>
  </div>
</div>

## Further read

- 📄 [Complete Article](https://digital-library.theiet.org/doi/10.1049/icp.2022.0484)
