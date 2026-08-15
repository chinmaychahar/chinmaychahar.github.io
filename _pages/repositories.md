---
layout: page
permalink: /repositories/
title: open source
description: Selected projects, stack, and my recent GitHub activity.
nav: true
nav_order: 2
---

I build and contribute to open-source tools and SDKs, primarily across **CNCF** and **AcademySoftwareFoundation** projects
(e.g. OpenTelemetry, Meshery, MaterialX, Dragonfly, Perses etc.), alongside smaller developer utilities and personal projects.

**Stack:** Python, Rust, C++, TypeScript, Java

<h2 class="os-heading">Featured contributions</h2>

<div class="contrib-grid">
  {% for item in site.data.repositories.featured_contributions %}
    {% include repository/contrib_card.liquid item=item %}
  {% endfor %}
</div>

<h2 class="os-heading">My projects</h2>

<div class="contrib-grid">
  {% for item in site.data.repositories.personal_projects %}
    {% include repository/contrib_card.liquid item=item %}
  {% endfor %}
</div>

<h2 class="os-heading">Contribution activity</h2>

<div class="contrib-panel">
  <img
    src="https://ghchart.rshah.org/2698ba/{{ site.data.repositories.github_username }}"
    alt="{{ site.data.repositories.github_username }}'s GitHub contribution graph"
    loading="lazy"
  />
</div>

<p class="os-more">
  <a href="https://github.com/{{ site.data.repositories.github_username }}" target="_blank" rel="external nofollow noopener">See more on GitHub &rarr;</a>
</p>
