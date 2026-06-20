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

Currently helping maintain the [`opentelemetry-aws`](https://github.com/open-telemetry/opentelemetry-rust-contrib/tree/main/opentelemetry-aws) Rust crate in the [OpenTelemetry Rust Contrib](https://github.com/open-telemetry/opentelemetry-rust-contrib) repo (CNCF) - reviewing PRs, triaging issues, and keeping it compatible with upstream releases.

---

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-start align-items-start">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

{% endif %}

---

<img src="https://ghchart.rshah.org/chinmaychahar" alt="GitHub Contribution Graph" style="max-width:100%;height:auto;" />

---

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
