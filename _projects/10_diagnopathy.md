---
layout: posts
title: Enhancing Retinal Image Clarity
description: Poor image quality can hide early signs of diabetic eye disease. We show how better pre-processing brings those signs into sharper focus.
img: assets/reports/diagnopathy/Picture7.png
importance: 10
category: Deep Learning
related_publications: true
non_preview: true
math: true
tags:
  - Image Processing
  - Computer Vision
  - Healthcare AI
date: 2019-04-01
---

<p align="center" style="display:inline-flex; flex-wrap:wrap; gap:6px;">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white"/>
  <img src="https://img.shields.io/badge/SciPy-8CAAE6?style=flat&logo=scipy&logoColor=white"/>
  <img src="https://img.shields.io/badge/Matplotlib-11557c?style=flat&logo=plotly&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"/>
</p>

Early detection of diabetic retinopathy depends on the clarity of retinal images. Yet, many scans suffer from haze, blur, or uneven lighting.
This study investigates how image enhancement during pre-processing can improve the visibility of retinal lesions for both clinicians and AI models.
We present a model-independent evaluation framework and introduce the Illuminate–Sharpen method, which enhances image clarity and consistency without requiring labeled data.

## Imprecise Retinal Imaging Limits Diabetic Retinopathy Diagnosis

Diabetic retinopathy (DR) is a diabetes related condition that affects the blood vessels in the retina, the light-sensitive tissue at the back of the eye ([source](https://thewomenshealthmagazine.com/diabetic-retinopathy-types-causes-symptoms-diagnosis-prevention-treatments-and-home-remedies/)).
As per a study conducted in 2021, it was estimated that around 9.60 million people in the US are living with DR {%cite lundeen2023prevalence --file externals%}.
Worldwide, the prevalence of DR is increasing at an alarming rate.
The World Health Organization (WHO) has predicted that in India, the number of adults with diabetes will be the highest in the world: From 19 million in 1995 to 80 million in 2030, ([source](https://www.rrh.org.au/journal/article/350)) {%cite vashist2011role --file externals%}.
Timely intervention can reduce severe visual loss by 90% {%cite etdrs1991effects --file externals%}.
Doctors often rely on high-quality retinal images to detect early signs of the disease.
These images are often blurry, poorly illuminated, or uneven in contrast, which can make early signs of the disease easy to miss by both physicians and AI-based diagnostic tools.
Improving image clarity is therefore not just a technical enhancement, but a crucial step toward saving sight.

## From Poor Quality to Clarity: Image Enhancement Approaches

Retinal fundus images are the foundation for diagnosing DR.
These color photographs capture the back of the eye, showing blood vessels, the optic disc, and the macula, areas where early signs of damage appear.
Doctors study these images to identify and grade disease severity based on visible lesions such as microaneurysms, hemorrhages, and exudates as shown in [Figure&nbsp;1](#fig-retina).
The pattern, color, and location of these features help determine whether the disease is mild, moderate, or severe. Regular imaging also allows physicians to track progression over time, guiding timely treatment decisions.

<p id="fig-retina"></p>
<div class="row justify-content-center my-3">
  <div class="col-sm-10 col-md-8">
    {% include figure.liquid
 loading="lazy"
 path="assets/reports/diagnopathy/Picture8.png"
 title="Annotated retinal fundus image"
 class="img-fluid rounded z-depth-1 shadow-sm w-100 mx-auto d-block"
    %}
    <span class="caption d-block text-center mt-2">
 Annotated retinal fundus image showing key DR lesions.
    </span>
  </div>
</div>

Similarly, AI algorithms, both classical and deep learning, are designed to recognize patterns of the lesions in the images that indicate disease.
By designing algorithms (or training them) on thousands of labeled examples, algorithms can assist doctors by highlighting suspicious regions, flagging subtle changes, or even grading disease automatically.

However, the effectiveness of both human and AI algorithms depends heavily on image clarity and consistency.
Retinal images often suffer from poor quality due to uneven lighting, motion blur, improper focus, or obstructions such as cataracts and small pupils.
Such issues can hide early signs of disease or lead to errors in diagnosis, reducing overall accuracy.
Hence, there is a need for image enhancement algorithms in the pre-processing stage to improve image quality, enabling more precise feature detection and more reliable diagnosis.

Image enhancement does not in itself perform segmentation, but it ideally improves observability of relevant features.
Example image enhancement techniques are color illumination, image dehazing, deblurring, and edge detection.

While many DR detection and lesion segmentation algorithms have been proposed, there is less emphasis on image enhancement pre-processing and a poor understanding of why one pre-processing technique might be more useful than another.
This knowledge can help select the most effective enhancement methods based on quality, ensuring consistent image quality, and improving the accuracy of both human and AI-based diagnosis.

## Our Approach: The Illuminate–Sharpen Method

In this study, we examined how different enhancement techniques influence the detection of DR lesions in retinal fundus images. Instead of relying on trial-and-error model testing, we developed a theoretical framework to understand why specific pre-processing methods make disease features more visible.
First, we also introduced simple, model-independent metrics, **consistency score**(how uniform the enhancement is across images) and **separability score**(how well diseased and healthy pixels can be distinguished), to measure how effectively an enhancement method reveals disease features without requiring labeled data or complex machine learning models.

We also reinterpreted the dehazing model (used initially for natural images) as a general framework for image enhancement, showing that it amplifies differences between pixel colors and improves contrast in medical images.
Using our image enhancement score, we created a new technique called **Illuminate-Sharpen**, which brightens and sharpens images to make disease areas more visible.
Our method outperformed standard techniques such as histogram equalization and contrast stretching.
It helped make small lesions like microaneurysms easier to detect in the IDRiD dataset.

<div class="row justify-content-center my-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
 loading="lazy"
 path="assets/reports/diagnopathy/Picture7.png"
 title="overview image"
 class="img-fluid rounded z-depth-1 w-75 mx-auto d-block" %}
    </div>
    <span class="caption d-block text-center mt-2">
 Segmentation results after applying image enhancement methods—enhanced images improve contrast and detail, enabling more precise separation of retinal structures and lesion boundaries.
    </span>
</div>

## Further read

- 📄 <a href="/assets/js/pdfjs/web/viewer.html?file=/assets/reports/diagnopathy/report.pdf" target="_blank">Full Technical Report</a>
