---
layout: default
title: Events
permalink: /activities/
nav: true
nav_order: 6
map: true
---

## Research Activities {#research-activities}

<div class="cv">
  {% assign activities = site.data.activities | where_exp: "item", "item.contents.size > 0" %}
  {% for entry in activities %}
    <div class="card mt-3 p-3">
      <h3 class="card-title font-weight-medium" id="{{ entry.title | slugify }}">{{ entry.title }}</h3>
      {% case entry.type %}
        {% when "time_table" %}
          {% include cv/time_table.liquid data=entry.contents %}
        {% when "list" %}
          {% include cv/list.liquid data=entry.contents %}
        {% when "map" %}
          {% include cv/map.liquid data=entry.contents %}
        {% when "nested_list" %}
          {% include cv/nested_list.liquid data=entry.contents %}
        {% else %}
          <p>Unsupported type: {{ entry.type }}</p>
      {% endcase %}
    </div>
  {% endfor %}
</div>

## Talks {#talks}

<div class="cv">
{% for entry in site.data.talks %}
  <a class="anchor" id="{{ entry.title }}"></a>
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium" id="{{ entry.title | slugify }}">{{ entry.title }}</h3>
    <div>
      {% include cv/time_table.liquid %}
    </div>
  </div>
{% endfor %}
</div>
