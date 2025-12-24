---
layout: skills
title: "Skills"
permalink: /skills/
nav: false
nav_order: 1
# toc:
#  sidebar: left
---

{% assign skills = site.data.skills.tools %}

<canvas id="skillsChart"
        data-labels='[{% for skill in skills %}"{{ skill.name }}"{% unless forloop.last %}, {% endunless %}{% endfor %}]'
        data-values='[{% for skill in skills %}{{ skill.value }}{% unless forloop.last %}, {% endunless %}{% endfor %}]'>
</canvas>
