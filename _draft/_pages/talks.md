---
layout: default
permalink: /talks/
title: Talks
nav: false
nav_order: 5
toc: true
---

<div class="cv">
{% for entry in site.data.talks %}
  <a class="anchor" id="{{ entry.title }}"></a>
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">{{ entry.title }}</h3>
    <div>
      {% include cv/time_table.liquid %}
    </div>
  </div>
{% endfor %}
</div>
