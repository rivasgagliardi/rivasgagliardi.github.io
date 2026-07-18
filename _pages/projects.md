---
layout: page
title: Forschungsprojekte
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: [Aktuell, Abgeschlossen]
horizontal: false
---

<style>
.projects .row.row-cols-1.row-cols-md-3 {
  position: static !important;
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
.projects .col {
  position: static !important;
  width: auto !important;
  left: auto !important;
  top: auto !important;
}
.projects .card {
  border-left: 3px solid var(--global-theme-color);
  border-top: none;
  height: 100%;
}
</style>
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
