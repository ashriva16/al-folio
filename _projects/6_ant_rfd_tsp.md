---
layout: posts
title: Metaheuristics Optimization on CUDA
description: Designed a GPU-accelerated hybrid of Ant Colony Optimization and River Flow Dynamics for the Traveling Salesman Problem.
img: assets/reports/ant_rfd_tsp/Picture12.png
importance: 6
category: High Performance Computing
tags: [Optimization, CUDA]
related_publications: true
pretty_table: true
non_preview: true
date: 2016-04-01
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white"/>
  <img src="https://img.shields.io/badge/CUDA-76B900?style=flat&logo=nvidia&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"/>
</p>

## The Travelling Salesman's Dilemma

Imagine a pizza delivery driver with orders to drop off at 5 different locations across town. The challenge for the driver is to find the most efficient route that covers every stop once.
This is a classic operations research and computer science puzzle, famously known as the Travelling Salesman Problem (TSP).
Finding the perfect route for the pizza delivery guy may be easy with just a few stops. Still, as the number of locations grows, it quickly becomes challenging to figure out the best path.

The TSP shows up in many industrial and scientific applications whenever efficiency matters. For example

- **Manufacturing & Supply Chains**: Scheduling movement of goods between machines, warehouse picking routes, and distribution planning.
- **Astronomy**: Telescopes optimize the order of star or planet observations to minimize the time spent repositioning.
- **3D Printing & Chip Design**: Printers and circuit designers plan paths that reduce wasted motion, speeding up manufacturing.

In today's competitive environment, this route optimization isn't just an academic puzzle but also an essential problem for cost optimization, sustainability, and better customer experience. So how do we actually solve such a complex problem?

## Hacking the TSP

A variety of strategies exist to tackle the TSP, such as exact optimization, rule-based heuristics, local search, metaheuristics, and emerging learning-based models.
Each takes a different path to balance speed and solution quality, as summarized below.

| **Approach**   | **What it Does**                                              | **Scalability**       | **Quality**                 |
| -------------- | ------------------------------------------------------------- | --------------------- | --------------------------- |
| Exact Methods  | Guarantee shortest route (dynamic programming, ILP, Concorde) | ❌                    | ✅                          |
| Heuristics     | Quick rules (e.g., nearest neighbor, Christofides)            | ✅                    | ❌                          |
| Local Search   | Improves routes step by step (2-opt, 3-opt, LK)               | ✅                    | ⚠️ _(good, but not global)_ |
| Metaheuristics | Nature-inspired (GA, SA, ACO, RFD, Tabu)                      | ✅                    | ✅                          |
| Learning-Based | AI/ML learns routing patterns (RL, GNNs)                      | ✅ _(after training)_ | ⚠️ _(still emerging)_       |

{: .table .table-hover .table-striped}

This spectrum makes clear: there's no one-size-fits-all for TSP.
The correct method depends on problem size, constraints, and how much perfection you can afford to sacrifice for speed.

## "When Approximate is Enough"

> When a near-optimal solution is sufficient, don't let the pursuit of perfection get in the way of progress

Of all existing approaches, metaheuristic algorithms scale better in practice because they are highly parallelization-friendly, unlike heuristics and local search, which are inherently more sequential.
A metaheuristic is a higher-level, problem-independent strategy that guides problem-specific heuristics in the search for good solutions.
These methods often combine randomness, memory, and adaptive rules to balance exploration and exploitation.
While many metaheuristics are inspired by natural processes (e.g., evolution, swarm behavior, or physics), others are purely algorithmic.
They typically produce near-optimal solutions, though they require parameter tuning and often benefit from multiple randomized initial starts.

Some of the most common metaheuristic algorithms applied to the TSP include Ant Colony Optimization (ACO), Genetic Algorithms (GA), Simulated Annealing (SA), and Particle Swarm Optimization (PSO). Comparative studies (e.g., {% cite zhang2025comparative --file externals %}) report that GA often achieves better computational efficiency, while ACO tends to yield higher-quality tours. However, a drawback of ACO is its tendency to stagnate in local minima. To address this, {% cite stutzle1999aco --file externals %} proposed hybridization strategies, and subsequent work introduced the ACO–RFD hybrid, which leverages river flow dynamics to help ACO escape local optima and improve performance.

With the rise of GPU computing, large-scale optimization problems can now be tackled more efficiently. We propose that the hybrid ACO–RFD algorithm can be further scaled on GPUs, enabling larger problem instances to be solved with significantly better performance.

## Turbocharging Hybrid Metaheuristics with GPUs

In this work, we extended the hybrid Ant Colony Optimization–River Flow Dynamics (ACO–RFD) algorithm for solving the Traveling Salesman Problem (TSP) on GPUs. To achieve this, we introduced an 'ant-drop' entity that fuses ACO's constructive speed with RFD's resilience against local minima. We explored two GPU parallelization strategies: HB1 (task-parallel) and HB2 (combining task- and data-parallelism).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
 loading="lazy"
 path="assets/reports/ant_rfd_tsp/Picture12.png"
 title="overview image"
 class="img-fluid rounded z-depth-1 w-50 mx-auto d-block" %}
    </div>
</div>
<span class="caption">
 Overview of proposed approach.
</span>

Key outcomes of our work include:

- **Improved solution quality** compared to standalone ACO.
- **Significant GPU speedups** over serial and prior parallel versions, reaching full multiprocessor occupancy with HB2.
- **HB2 (data-parallel strategy)** proved most efficient, benefiting from shared memory usage and memory coalescing.

## Further read

<!-- - 📂 [GitHub Repository](https://github.com/ashriva16/Peak_Stress_in_Microstructures) -->

- 📄 <a href="/assets/js/pdfjs/web/viewer.html?file=/assets/reports/ant_rfd_tsp/report.pdf" target="_blank">Full Technical Report</a>
