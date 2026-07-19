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

<script>
document.addEventListener('DOMContentLoaded', function () {
  var list = document.querySelector('#navbar .navbar-menu-list');
  if (list) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = '<a class="nav-link" href="/pt/teaching/" style="font-weight:600">PT</a>';
    var toggle = list.querySelector('.toggle-container');
    if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
  }
});
</script>
