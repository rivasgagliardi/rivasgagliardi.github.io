---
layout: page
permalink: /en/projects/
title: Research Projects
nav: false
---

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 1rem;
}
.projects-grid .card {
  border-left: 3px solid var(--global-theme-color);
  padding: 1rem 1.25rem;
}
.projects-grid .card a {
  border-bottom: none;
}
.projects-grid h3 {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
}
.projects-grid p {
  margin: 0;
  opacity: 0.75;
  font-size: 0.9rem;
}
.section-label {
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 0.5rem;
}
.lang-switcher {
  font-size: 0.8rem;
  white-space: nowrap;
  margin-left: auto;
  margin-right: 0.75rem;
  align-self: center;
}
.lang-switcher a {
  opacity: 0.55;
  border-bottom: none;
  color: var(--global-text-color);
}
.lang-switcher a.active {
  opacity: 1;
  font-weight: 600;
  pointer-events: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var map = {
    '/': { text: 'About', href: '/en/' },
    '/books/': { text: 'Books', href: '/en/books/' },
    '/publications/': { text: 'Publications', href: '/en/publications/' },
    '/projects/': { text: 'Research Projects', href: '/en/projects/' },
    '/cv/': { text: 'CV', href: '/en/cv/' },
    '/teaching/': { text: 'Teaching', href: '/en/teaching/' }
  };
  document.querySelectorAll('#navbar .nav-link').forEach(function (a) {
    var path = new URL(a.href).pathname;
    if (map[path]) {
      a.childNodes[0].textContent = map[path].text + ' ';
      a.href = map[path].href;
    }
  });
  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/projects/">DE</a> · <a href="/pt/projects/">PT</a> · <a href="/en/projects/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

<h2 class="section-label">Current</h2>

<div class="projects-grid">
  <div class="card">
    <a href="/en/projects/frauenbilder/"><h3>Frauenbilder im Wandel</h3></a>
    <p>University of Cologne, since 2024</p>
  </div>
</div>

<h2 class="section-label">Completed</h2>

<div class="projects-grid">
  <div class="card">
    <a href="/en/projects/dfg/"><h3>Neuperspektivierungen nachkolonialer Theorie</h3></a>
    <p>University of Cologne, 2021–2024</p>
  </div>
  <div class="card">
    <a href="/en/projects/wolf/"><h3>Le Brésil littéraire (1863) von Ferdinand Wolf</h3></a>
    <p>Freie Universität Berlin, 2014–2019</p>
  </div>
  <div class="card">
    <a href="/en/projects/buchmarkt/"><h3>Die Präsenz der brasilianischen Literatur auf dem deutschsprachigen Buchmarkt zwischen 1993 und 2013</h3></a>
    <p>Freie Universität Berlin, 2010–2013</p>
  </div>
  <div class="card">
    <a href="/en/projects/drummond/"><h3>Amor infectum – a revolta do singular na lírica de Drummond</h3></a>
    <p>University of São Paulo, 2002–2006</p>
  </div>
</div>
