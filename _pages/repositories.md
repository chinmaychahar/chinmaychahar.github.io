---
layout: page
permalink: /repositories/
title: open source
description: What I build and maintain in the open.
nav: true
nav_order: 2
display_categories: [accessibility, tools]
horizontal: false
---

I build and contribute to open-source tools and SDKs across **CNCF** and **AcademySoftwareFoundation** projects, alongside smaller developer utilities and personal projects.

**Stack:** Python, Rust, C++, TypeScript, Java

{% assign m = site.data.repositories.maintainer %}

<div class="os-hero">
  <img class="os-hero-logo" src="{{ m.logo | relative_url }}" alt="OpenTelemetry logo" loading="lazy" />
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
      <a href="{{ m.crate_url }}" target="_blank" rel="external nofollow noopener">Crate &rarr;</a>
      <a href="{{ m.prs_url }}" target="_blank" rel="external nofollow noopener">My PRs &rarr;</a>
      <a href="{{ m.org_url }}" target="_blank" rel="external nofollow noopener">@open-telemetry &rarr;</a>
    </div>
  </div>
</div>

<h2 class="os-heading">Open source contributions</h2>

<div class="contrib-list">
  {% for c in site.data.repositories.contributions %}
    {% include repository/contribution_row.liquid item=c %}
  {% endfor %}
</div>

<p class="os-more">Also active across 50+ repositories — <a href="https://github.com/{{ site.data.repositories.github_username }}" target="_blank" rel="external nofollow noopener">see my GitHub &rarr;</a></p>

<h2 class="os-heading">Projects</h2>

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

<h2 class="os-heading">Contribution activity</h2>

<div class="contrib-panel">
  <img
    src="https://ghchart.rshah.org/2698ba/{{ site.data.repositories.github_username }}"
    alt="{{ site.data.repositories.github_username }}'s GitHub contribution graph"
    loading="lazy"
  />
</div>
