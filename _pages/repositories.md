---
layout: page
permalink: /repositories/
title: Repositories
description: Selected projects, stack, and my recent GitHub activity.
nav: true
nav_order: 4
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

## What I Work On

I build and contribute to open-source tools and SDKs, with work across **CNCF projects** and adjacent cloud-native tooling (e.g. Dragonfly, OSCAL-Compass, Bokeh, Appwrite etc.), alongside smaller developer utilities and personal projects.

**Stack:** Python, Java, TypeScript, AWS, Smithy, APIs, CI/CD

---

## Recent GitHub Activity

<ul id="gh-activity" style="list-style-type: none; padding-left: 0;"></ul>

<script>
fetch('https://api.github.com/users/chinmaychahar/events/public?per_page=6')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('gh-activity');
    if (!data || data.message) {
      container.innerHTML = '<li>Unable to fetch activity — GitHub API rate limit?</li>';
      return;
    }
    data.forEach(e => {
      const date = new Date(e.created_at).toLocaleDateString();
      const type = e.type.replace(/Event$/, "");
      const repo = e.repo.name.split('/')[1] || e.repo.name;
      const li = document.createElement('li');
      li.style.marginBottom = '0.5rem';
      li.innerHTML = `<strong>${type}</strong> at <em>${repo}</em> — ${date}`;
      container.appendChild(li);
    });
  });
</script>
