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

<style>
.projects .row.row-cols-1.row-cols-md-3 {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
  gap: 24px !important;
}
.projects .row.row-cols-1.row-cols-md-3 > .col {
  flex: none !important;
  max-width: none !important;
  width: 100% !important;
  position: static !important;
}
.projects .card {
  border-left: 3px solid var(--global-theme-color);
  height: 100%;
}
.projects h2.category {
  color: var(--global-text-color);
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var list = document.querySelector('#navbar .navbar-menu-list');
  if (list) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = '<a class="nav-link" href="/pt/projects/" style="font-weight:600">PT</a>';
    var toggle = list.querySelector('.toggle-container');
    if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
  }
});
</script>
