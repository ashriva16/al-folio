---
layout: posts
title: Granular Mechanics with Graph Theory
description: Used LAMMPS-based DEM simulations and graph-theory analysis to study how particle-scale mechanics and packing disorder shape force-chain formation and load transfer in granular materials.
# description: with background image
video: assets/reports/force_chains/media.webm
importance: 13
category: Scientific Computing
related_publications: true
non_preview: true
date: 2021-11-01
tags:
  - Discrete Element Method
  - Graph Theory
  - LAMMPS
  - Mechanics
  - Data Analysis
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/LAMMPS-1E90FF?style=flat&logo=atom&logoColor=white"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
</p>

This article explores how tiny shifts between grains of sand or rock can lead to large-scale failures in tunnels and foundations.
Existing experiments and simulations have shown how hidden networks of forces, called force chains, form and break within granular materials. Understanding these invisible structures helps engineers design safer and more resilient systems.
We use graph theory to characterize force chains and then explore how particle size and variation in cohesion affect the assembly that leads to force chains.

## When Solid Ground Turns Unpredictable

During the 2008 Wenchuan earthquake, the Longxi Road Tunnel, located near the epicenter, collapsed completely (see [Figure&nbsp;1](#fig-retina)).
What seemed like stable rock suddenly crumbled into debris, burying the structure.

<p id="fig-retina"></p>
<div class="row justify-content-center my-3">
  <div class="col-sm-10 col-md-8">
    {% include figure.liquid
 loading="lazy"
 path="/assets/reports/force_chains/tunnel_collapse.jpeg"
 title="Collapse of the Longxi tunnel at the crossing of the fault"
 class="img-fluid rounded z-depth-1 shadow-sm w-100 mx-auto d-block"
    %}
    <span class="caption d-block text-center mt-2" markdown="1">
 Collapse of the Longxi Tunnel at the crossing of the fault (Wenchuan Earthquake, 2008)
    </span>
  </div>
</div>

This failure illustrates that the surrounding rock mass did not behave as a rigid solid but as a granular material.
Granular material is composed of countless small particles, such as sand, gravel, or grains of rice, that can behave like a solid in one moment and flow like a liquid in the next.

<p id="fig-retina"></p>
<div class="row justify-content-center my-3">
  <div class="col-sm-10 col-md-8 col-lg-4">
    {% include figure.liquid
        loading="lazy"
        path="/assets/reports/force_chains/Granular_matter_examples.png"
        title="Granular Materials"
        class="img-fluid rounded z-depth-1 shadow-sm w-100 mx-auto d-block"
    %}
    <span class="caption d-block text-center mt-2" markdown="1">
 Examples of Granular Materials Source: [wiki](https://en.wikipedia.org/wiki/Granular_material#/media/File:Granular_matter_examples.PNG)
    </span>
  </div>
</div>

The disturbance during the earthquake caused the granular mass to transition from a solid-like to a fluid-like state. Similar disturbances can also occur during tunnel construction or operations.

The effect of such materials on tunnel stability is only one example of why understanding granular behavior is vital.
Granular materials also play a pivotal role in the stability of other structures, such as bridges, buildings, and dams.

With rapid infrastructure development driven by economic growth, ensuring the safe construction and operation of engineering projects requires a deep understanding of how granular materials respond under different conditions.

But how can tiny movements between grains of sand or rock fragments cause an entire tunnel or slope to fail?

## When Small Players (Particles) Change Everything

The answer lies in how the force from structures is shared among countless particles below. When these particles shift, even slightly, the balance that keeps the structure stable can change, creating weak zones that may suddenly give way.

Understanding this hidden interaction is key to explaining why granular materials sometimes behave unpredictably.
This idea forms the basis for studying **force chains**, microscopic networks of particles that transfer forces much greater than those in their surroundings.

These force chains are often visualized in photoelastic experiments, as shown in [Figure 2](#fig-chainexp).
The video captures the motion of a circular object being pulled out from a bed of transparent, disk-shaped particles. As the object moves, bright patterns appear and disappear within the material.
These bright patterns are the force chains, showing how contact forces build up, shift, and break during rapid motion.

<p id="fig-chainexp"></p>
<div class="row">
  <div class="col-12 col-md-10 col-lg-8 mx-auto">
    {% include video.liquid
 path="https://www.youtube.com/embed/6WEHJ0Fm3d0?start=1"
 height="400px"
 class="w-100 rounded z-depth-1"
    %}
    <span class="caption d-block text-center mt-2" markdown="1">
 Experimental observation of force chains
    </span>
  </div>
</div>

These chains function like a spinal cord, channeling forces through selective paths instead of spreading them evenly, silently deciding whether a structure remains stable or collapses.
Understanding how these chains form and evolve helps explain the changes that occur in granular materials during the transition from a solid-like to a fluid-like state.

But what controls the formation and disappearance of these chains?
Why do some granular materials develop strong, continuous force networks, while others remain fragmented or lose them entirely?
To answer these questions, we turn to our computational study, which explores how particle size, packing, and cohesion shape the emergence of force chains in granular systems.

## From Particle Properties to Assembly: The Birth of Force Chains

To explore what shapes these hidden networks inside granular materials, we built a digital model that simulates how thousands of tiny particles press, move, and settle under pressure.
In this virtual setup, we changed two factors, particle size and particle attraction, resulting in a change in packing density.
This helped us see how these factors influence the invisible patterns of force inside the material.

The results were revealing.
Even a slight difference in particle size created visible force paths within the material.
But when the difference became too large, the system lost its structure.
The once organized network of forces broke apart, making the material weaker and more unpredictable.

The two videos below show this difference.
On the right is a neatly packed system in which forces flow smoothly through regular patterns.
On the left is an unevenly packed system where the same load spreads unevenly through scattered paths.
The bright areas show the particles carrying more force.
Together, they illustrate how slight variations in particle arrangement can completely alter materials' behavior.

<div class="row justify-content-center align-items-center my-3">
  <!-- Left video -->
  <div class="col-12 col-md-6 mb-3">
    <video controls width="100%" style="max-width:100%; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
      <source src="/assets/reports/force_chains/media1.webm" type="video/webm">
 Your browser does not support the video tag.
    </video>
  </div>

 <!-- Right video -->
  <div class="col-12 col-md-6 mb-3">
    <video controls width="100%" style="max-width:100%; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
      <source src="/assets/reports/force_chains/media2.webm" type="video/webm">
 Your browser does not support the video tag.
    </video>
  </div>

 <!-- Shared caption -->
  <div class="col-12">
    <span class="caption d-block text-center mt-2" markdown="1">
 Force chains in an irregular system **(Left)** and absence of force chains in a well-arranged system under compression **(Right)**. Refer {%cite 10.1115/1.4068059 --file papers %}
    </span>
  </div>
</div>

When the attraction between particles increased, the number of strong force paths decreased. The forces became more evenly shared among many particles, creating a smoother but less concentrated pattern.
In simple terms, a stronger attraction between particles made the material more uniform, but also less able to carry large forces along distinct paths.

These results show that the way tiny particles arrange and interact can decide whether a structure remains stable or fails. Understanding these hidden force networks helps engineers design stronger and safer materials and foundations.

## Further read

- 📄 [Complete Article](https://arxiv.org/pdf/2503.03668)
