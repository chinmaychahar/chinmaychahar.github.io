---
layout: page
permalink: /publications/
title: publications
description: A list of my research work and publications.
years: [2025, 2017]
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">
  {%- for y in page.years %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f papers -q @*[year={{y}}]* %}
  {% endfor %}
</div>
