---
layout: page
permalink: /repositories/
title: open-source
description: Selected projects, stack, and my recent GitHub activity.
nav: true
nav_order: 4
---

## What I Work On

I build and contribute to open-source tools and SDKs, with work across **CNCF projects** and other cloud-native tools (e.g. Dragonfly, OSCAL-Compass, Bokeh, Appwrite etc.), alongside smaller developer utilities and personal projects.

**Stack:** Python, Java, TypeScript, AWS, Smithy, APIs, CI/CD

---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% endif %}

{% if site.data.repositories.github_repos %}

## Featured Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}

---

## Recent GitHub Activity

<div id="gh-activity" class="d-flex flex-column gap-2"></div>

<script>
fetch('https://api.github.com/users/chinmaychahar/events/public?per_page=6')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('gh-activity');
    if (!data || data.message) {
      container.innerHTML = '<div>Unable to fetch activity — GitHub API rate limit?</div>';
      return;
    }
    data.forEach(e => {
      const date = new Date(e.created_at).toLocaleDateString();
      const type = e.type.replace(/Event$/, "");
      const repo = e.repo.name.split('/')[1] || e.repo.name;

      const card = document.createElement('div');
      card.className = "card p-2 shadow-sm";
      card.style.fontSize = "0.95rem";
      card.style.backgroundColor = "#f8f9fa"; // light card color
      card.innerHTML = `<strong>${type}</strong> at <em>${repo}</em> — ${date}`;
      container.appendChild(card);
    });
  });
</script>
