---
layout: page
permalink: /repositories/
title: open source
description: Selected projects, stack, and my recent GitHub activity.
nav: true
nav_order: 4
---

I build and contribute to open-source tools and SDKs, with work across **CNCF projects** and other cloud-native tools  
(e.g. Dragonfly, OSCAL-Compass, Bokeh, Appwrite etc.), alongside smaller developer utilities and personal projects.

**Stack:** Python, Java, TypeScript, AWS, Smithy, APIs, CI/CD

---

{% if site.data.repositories.github_users %}

## GitHub Users & Profile

<div class="d-flex flex-wrap gap-4">

  <!-- Existing user stats cards -->
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}

  <!-- GitHub Profile Card -->
  <div id="github-card-container">
    <div id="github-card"
         data-username="chinmaychahar"
         data-max-repos="6"
         data-sort-by="stars"
         data-header-text="Top Repositories">
    </div>
    <script src="https://piotrl.github.io/github-profile-card/dist/gh-profile-card.min.js"></script>
  </div>

</div>

{% endif %}

---

## GitHub Contribution Calendar

<img src="https://ghchart.rshah.org/chinmaychahar" alt="GitHub Contribution Graph" style="max-width:100%;height:auto;" />

---

{% if site.data.repositories.github_repos %}

## Featured Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
