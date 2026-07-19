---
layout: page
permalink: /pt/projects/
title: Projetos de pesquisa
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
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var map = {
    '/': { text: 'Sobre mim', href: '/pt/' },
    '/books/': { text: 'Livros', href: '/pt/books/' },
    '/publications/': { text: 'Publicações', href: '/pt/publications/' },
    '/projects/': { text: 'Projetos de pesquisa', href: '/pt/projects/' },
    '/cv/': { text: 'Currículo', href: '/pt/cv/' },
    '/teaching/': { text: 'Ensino', href: '/pt/teaching/' }
  };
  document.querySelectorAll('#navbar .nav-link').forEach(function (a) {
    var path = new URL(a.href).pathname;
    if (map[path]) {
      a.childNodes[0].textContent = map[path].text + ' ';
      a.href = map[path].href;
    }
  });
  var list = document.querySelector('#navbar .navbar-menu-list');
  if (list) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = '<a class="nav-link" href="/projects/" style="font-weight:600">DE</a>';
    var toggle = list.querySelector('.toggle-container');
    if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
  }
});
</script>

<h2 class="section-label">Atual</h2>

<div class="projects-grid">
  <div class="card">
    <a href="/pt/projects/frauenbilder/"><h3>Frauenbilder im Wandel</h3></a>
    <p>Universidade de Colônia, desde 2024</p>
  </div>
</div>

<h2 class="section-label">Concluídos</h2>

<div class="projects-grid">
  <div class="card">
    <a href="/pt/projects/dfg/"><h3>Neuperspektivierungen nachkolonialer Theorie</h3></a>
    <p>Universidade de Colônia, 2021–2024</p>
  </div>
  <div class="card">
    <a href="/pt/projects/wolf/"><h3>Le Brésil littéraire (1863) von Ferdinand Wolf</h3></a>
    <p>Universidade Livre de Berlim, 2014–2019</p>
  </div>
  <div class="card">
    <a href="/pt/projects/buchmarkt/"><h3>A presença da literatura brasileira no mercado editorial de língua alemã (1993–2013)</h3></a>
    <p>Universidade Livre de Berlim, 2010–2013</p>
  </div>
  <div class="card">
    <a href="/pt/projects/drummond/"><h3>Amor infectum – a revolta do singular na lírica de Drummond</h3></a>
    <p>Universidade de São Paulo, 2002–2006</p>
  </div>
</div>
