---
layout: page
permalink: /teaching/
title: Lehre
nav: true
nav_order: 6
calendar: true
---

<style>
.course-title a, a.course-title {
  pointer-events: none;
  color: inherit;
  text-decoration: none;
  cursor: default;
}
.course-item {
  border-left: 3px solid var(--global-theme-color);
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}
.course-list {
  display: flex !important;
  flex-direction: column !important;
}
.course-item {
  width: 100% !important;
}

</style>

{% include courses.liquid %}
