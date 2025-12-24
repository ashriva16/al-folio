---
layout: posts
title: Active Semi-Supervised Learning
description: Investigated how small, strategically labeled datasets can guide large, unlabeled graphs. By integrating active learning with graph-based SSL, we achieved higher accuracy using fewer labeled examples.
img: assets/reports/graph_ssl/Picture9.png
importance: 7
category: Deep Learning
tags: [Active Learning, Graph Theory, Semi-supervised Learning]
related_publications: true
non_preview: true
date: 2016-04-01
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/matlab-R2020b"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"/>
</p>

Modern ML models depend on vast unlabeled data but often lack reliability without sufficient supervision.
This work explores how **active learning** can strengthen **graph-based semi-supervised learning (GSSL)** by labeling only the most informative samples.
By combining **uncertainty measures** with **graph centrality**, we enable efficient label propagation across large datasets—achieving higher accuracy and stability while significantly reducing labeling cost.

## Big Models Still Need Supervision

> Without supervision, even the most advanced models risk becoming unreliable and unsafe.

Modern machine learning models are extremely data-hungry.
To train them, engineers use a large collection of unlabelled datasets (billions of web pages, books, articles, images, audio recordings, and even videos).
Most of these models are trained in an unsupervised manner, where the system learns patterns by predicting a desired output from raw data.
For sequential models, this could mean predicting the next word in a sentence, the next pixel in an image, or the next sound in a speech clip.
In the case of generative models, the goal can be to create new images or videos based on a given context.
However, when these models are applied in real-world settings, they often show severe limitations. For example,

- **Not aligned with human goals** - A model trained only on open web data may produce shallow answers that are not useful enough for scientific discussions or technical decision-making
- **Unsafe or harmful outputs**: Since it learns from the open web, it could reproduce toxic, biased, or even dangerous information (e.g., how to make weapons, offensive stereotypes).
- **Unreliable reasoning**: Without guidance, the model might confidently produce wrong or misleading answers.
- **Model Bias**: Models inherit stereotypes and imbalances from internet data, making their outputs unfair or unreliable in sensitive contexts.

Without expert supervision, these models risk being unreliable and ineffective in critical real-world applications.

## When Supervision Becomes Too Expensive

Engineers and researchers handle the challenges described above through several additional steps, such as fine-tuning with curated data, reinforcement Learning with human feedback, incorporating safety filters and alignment techniques, and semi-supervised learning (SSL).
While the first three methods are usually applied after training, SSL can be used earlier, saving the cost of extensive fine-tuning.

> "Full labeling is infeasible at scale — efficiency demands methods that learn from a small labeled subset."

Ideally, the challenges of reliability and safety can be mitigated by labeling data and guiding the model through supervised learning.
For example, in medical imaging, doctors can label a small set of retina scans to teach the model what counts as healthy or diseased.
However, if the volume of data is vast, it becomes impractical to label everything.
An alternate option is to label only a subset of the data to inform the model.
This is precisely where SSL comes in.

## Teaching a Handful, Informing Thousands

> "Semi-Supervised Learning spreads information from labeled nodes to their neighbors, exploiting structure in the data".

Semi-supervised learning is a machine learning approach that combines a small labeled dataset with a large unlabeled dataset during training.

- The labeled examples provide ground truth guidance.
- The unlabeled data helps the model discover structure and patterns in the overall dataset.

An essential class of SSL methods represents data as graphs, where label information from a few nodes is propagated through the graph structure to infer the labels of the unlabeled samples.
This refers to graph-based semi-supervised learning (GSSL) methods, {%cite song2022graph --file externals%}.
In this method

- Each data point is treated as a node.
- Edges connect nodes that are similar with weights defining the similarity of features between data points.
- A few labeled nodes "spread" their labels through the graph to unlabeled nodes using algorithms such as Label Propagation or Graph Laplacian methods.

The key idea is that similar nodes should share similar labels.
Suppose one retina scan is labeled "diseased," and it is strongly connected to another scan in the graph.
In that case, the second scan is likely "diseased" as well.

The main challenge is to select data for labeling in such a way that each labeled example provides the maximum possible information to the model, while keeping the number of labeled samples small.
This is where active learning comes in.

## Making Smart Choices for Wider Impact

> Active learning prioritizes the most informative samples for semi-supervised learning

In our work, we explored how active learning can improve (GSSL).

- We started with a small set of labeled data and a much larger pool of unlabeled data.
- Using active learning, we didn't label randomly. Instead, we developed a way to select the most informative nodes in the graph to label.
- To measure informativeness, we combined uncertainty (how unsure the model is about a sample) with diversity (whether labeling this sample brings new information, not just redundancy).
- We also tested different centrality measures (ways to see which nodes are most "influential" in the graph). In particular, we studied clique-overlap centrality, which captures how well a node connects across different clusters

Once we selected and labeled these key nodes, we applied standard GSSL algorithms such as Label Propagation, Local and Global Consistency (LGC), and Modified Adsorption (MAD) to predict labels for the rest of the unlabeled data.

From our experiments, a few clear insights emerged:

1. Active learning helps labeling strategically (instead of randomly) and consistently improves accuracy across datasets.
2. Least-confidence uncertainty worked best among uncertainty measures (entropy, margin, and least confidence), and least confidence gave the most reliable results.
3. Clique-overlap centrality is robust when combined with uncertainty; clique-overlap centrality outperformed other centrality measures (like betweenness, closeness, degree, or PageRank).
4. Best combination: Least-confidence + Clique-overlap centrality gave the most accurate and stable results for GSSL.
5. Label Propagation and MAD performed well on these GSSL algorithms, when used with active learning, gave the lowest error compared to random labeling.

## Further read

<!-- - 📂 [GitHub Repository](https://github.com/ashriva16/Peak_Stress_in_Microstructures) -->

- 📄 <a href="/assets/js/pdfjs/web/viewer.html?file=/assets/reports/graph_ssl/report.pdf" target="_blank">Full Technical Report</a>
