---
layout: page
permalink: /en/teaching/
title: Teaching
nav: false
---

<style>
.year-label {
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 0.5rem;
}
.course-card {
  border-left: 3px solid var(--global-theme-color);
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}
.course-card h3 {
  margin: 0 0 0.2rem;
  font-size: 1.05rem;
}
.course-meta {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-bottom: 0.3rem;
}
.course-desc {
  margin: 0;
  font-size: 0.95rem;
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
  var list = document.querySelector('#navbar .navbar-menu-list');
  if (list) {
    var liDe = document.createElement('li');
    liDe.className = 'nav-item';
    liDe.innerHTML = '<a class="nav-link" href="/teaching/">DE</a>';
    var liPt = document.createElement('li');
    liPt.className = 'nav-item';
    liPt.innerHTML = '<a class="nav-link" href="/pt/teaching/">PT</a>';
    var toggle = list.querySelector('.toggle-container');
    [liDe, liPt].forEach(function (li) {
      if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
    });
  }
});
</script>

<h2 class="year-label">2026</h2>

<div class="course-card">
  <h3>Romane von Frauen aus dem 19. Jahrhundert - Sand, Caballero und Lopes de Almeida</h3>
  <div class="course-meta">Summer semester · University of Cologne</div>
  <p class="course-desc">Advanced seminar on nineteenth-century women authors and their contribution to the literary discourse of the period.</p>
</div>

<h2 class="year-label">2025</h2>

<div class="course-card">
  <h3>Personagens femininas do romantismo ao realismo nas literaturas francesa, espanhola e brasileira</h3>
  <div class="course-meta">Winter semester 2025/26 · University of São Paulo</div>
  <p class="course-desc">Advanced seminar on female figures between Romanticism and Realism, in transatlantic comparative perspective.</p>
</div>

<div class="course-card">
  <h3>Kolonisation und Emanzipation - Roberto Schwarz und die Herausforderungen der Kritischen Theorie</h3>
  <div class="course-meta">Winter semester 2025/26 · with Prof. Dr. Jorge Grespan · University of Cologne</div>
  <p class="course-desc">Advanced seminar on Roberto Schwarz's critical method in the context of Critical Theory.</p>
</div>

<div class="course-card">
  <h3>Das Leben der Frauen in den Romanen von Balzac, Clarín und Alencar</h3>
  <div class="course-meta">Winter semester 2025/26 · University of Cologne</div>
  <p class="course-desc">Introductory seminar on the literary representation of women's lived reality in the French, Spanish, and Brazilian novel.</p>
</div>

<div class="course-card">
  <h3>Der Realismus bei Eça de Queirós, Émile Zola und Pardo Bazán</h3>
  <div class="course-meta">Summer semester · University of Cologne</div>
  <p class="course-desc">Introductory seminar on comparative Realism in Portuguese, French, and Spanish literature.</p>
</div>

<h2 class="year-label">2024</h2>

<div class="course-card">
  <h3>Kino Latino</h3>
  <div class="course-meta">Summer semester · with Dr. Janek Scholz · University of Cologne</div>
  <p class="course-desc">Seminar on Latin American cinema in dialogue with literature and society.</p>
</div>

<div class="course-card">
  <h3>Die weiblichen Protagonistinnen von Flaubert, Galdós und Machado de Assis</h3>
  <div class="course-meta">Winter semester 2024/25 · University of Cologne</div>
  <p class="course-desc">Advanced seminar on female protagonists in the nineteenth-century French, Spanish, and Brazilian novel.</p>
</div>

<div class="course-card">
  <h3>Malandragem e volubilidade</h3>
  <div class="course-meta">Winter semester 2024/25 · with Prof. Dr. Jorge Grespan · University of São Paulo</div>
  <p class="course-desc">Advanced seminar on key concepts in Roberto Schwarz's literary criticism.</p>
</div>

<div class="course-card">
  <h3>Einführung in die Literaturwissenschaft Portugiesisch</h3>
  <div class="course-meta">Winter semester 2024/25 · University of Cologne</div>
  <p class="course-desc">Introductory course on methods and concepts in literary studies, with a focus on Portuguese-language literature.</p>
</div>

<h2 class="year-label">2020</h2>

<div class="course-card">
  <h3>História literária e ideologia no século XIX</h3>
  <div class="course-meta">Summer semester · University of São Paulo</div>
  <p class="course-desc">Advanced seminar on the ideological dimension of literary historiography in the nineteenth century.</p>
</div>
