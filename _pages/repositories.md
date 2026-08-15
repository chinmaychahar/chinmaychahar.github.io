---
layout: page
permalink: /repositories/
title: open source
description: What I build and maintain in the open.
nav: true
nav_order: 2
display_categories: [accessibility, tools, games/puzzles, misc]
horizontal: false
---

{% assign m = site.data.repositories.maintainer %}

<div class="os-hero">
  <img class="os-hero-logo" src="{{ m.logo | relative_url }}" alt="OpenTelemetry logo" width="56" height="56" loading="lazy" />
  <div class="os-hero-body">
    <div class="os-hero-eyebrow">{{ m.role }}</div>
    <div class="os-hero-title">{{ m.title }}<span class="contrib-tag">{{ m.org }}</span></div>
    <p class="os-hero-blurb">{{ m.blurb }}</p>
    <div class="os-hero-links">
      <img
        class="os-hero-badge"
        src="https://img.shields.io/crates/d/{{ m.crate }}?style=flat&label=crates.io%20downloads&labelColor=30363d&color=2698ba"
        alt="{{ m.crate }} downloads on crates.io"
        loading="lazy"
      />
      <a href="{{ m.cta_url }}" target="_blank" rel="external nofollow noopener">{{ m.cta_label }} &rarr;</a>
    </div>
  </div>
</div>

<p class="os-contributions">
  Always tinkering somewhere - recent stops include
  {% for c in site.data.repositories.contributions %}<a href="{{ c.url }}" target="_blank" rel="external nofollow noopener">{{ c.name }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}, etc.
</p>

<h2 class="os-heading" id="projects">Projects</h2>

<div class="projects">
  {% for category in page.display_categories %}
    <h3 class="category">{{ category }}</h3>
    {% assign categorized_projects = site.projects | where: "category", category | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in categorized_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
