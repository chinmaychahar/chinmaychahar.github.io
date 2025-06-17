---
layout: page
permalink: /publications/
title: publications
description: A list of research work and publications [here](https://scholar.google.co.in/citations?view_op=list_works&hl=en&hl=en&user=gaSN6XIAAAAJ).
years: [2025, 2023]
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
