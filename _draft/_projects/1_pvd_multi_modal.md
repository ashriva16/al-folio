Developed a multi-modal machine learning model to predict the microstructure of molybdenum thin films based on physical vapor deposition (PVD) process parameters. Integrated data from X-ray diffractograms, electron microscopy, and resistivity measurements to learn a joint latent representation of film structure. Used neural networks to map process conditions to structural outcomes, enabling accelerated process optimization in semiconductor materials.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
        loading="lazy"
        path="assets/reports/multi_modal/overview.png"
        title="overview image"
        class="img-fluid rounded z-depth-1 w-50 mx-auto d-block" %}
    </div>
</div>
<span class="caption">
    Overview of the approach.
</span>

The approach can be then used for inverse modeling of materials

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid
        loading="lazy"
        path="assets/reports/multi_modal/inverse_model.png"
        title="future approach"
        class="img-fluid rounded z-depth-1 w-25 mx-auto d-block" %}
    </div>
</div>
<span class="caption">
    Future active learning using trained multimodal machine learning
</span>
