---
layout: page
permalink: /pt/teaching/
title: Ensino
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
    li.innerHTML = '<a class="nav-link" href="/teaching/" style="font-weight:600">DE</a>';
    var toggle = list.querySelector('.toggle-container');
    if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
  }
});
</script>

<h2 class="year-label">2026</h2>

<div class="course-card">
  <h3>Romane von Frauen aus dem 19. Jahrhundert - Sand, Caballero und Lopes de Almeida</h3>
  <div class="course-meta">Semestre de verão · UzK</div>
  <p class="course-desc">Seminário avançado sobre autoras do século XIX e sua contribuição para o discurso literário da época.</p>
</div>

<h2 class="year-label">2025</h2>

<div class="course-card">
  <h3>Personagens femininas do romantismo ao realismo nas literaturas francesa, espanhola e brasileira</h3>
  <div class="course-meta">Semestre de inverno 2025/26 · USP</div>
  <p class="course-desc">Seminário avançado sobre figuras femininas entre o Romantismo e o Realismo, em perspectiva transatlântica comparada.</p>
</div>

<div class="course-card">
  <h3>Kolonisation und Emanzipation - Roberto Schwarz und die Herausforderungen der Kritischen Theorie</h3>
  <div class="course-meta">Semestre de inverno 2025/26 · com Prof. Dr. Jorge Grespan · UzK</div>
  <p class="course-desc">Seminário avançado sobre o método crítico de Roberto Schwarz no contexto da Teoria Crítica.</p>
</div>

<div class="course-card">
  <h3>Das Leben der Frauen in den Romanen von Balzac, Clarín und Alencar</h3>
  <div class="course-meta">Semestre de inverno 2025/26 · UzK</div>
  <p class="course-desc">Seminário introdutório sobre a representação literária da realidade feminina nos romances francês, espanhol e brasileiro.</p>
</div>

<div class="course-card">
  <h3>Der Realismus bei Eça de Queirós, Émile Zola und Pardo Bazán</h3>
  <div class="course-meta">Semestre de verão · UzK</div>
  <p class="course-desc">Seminário introdutório sobre o Realismo comparado nas literaturas portuguesa, francesa e espanhola.</p>
</div>

<h2 class="year-label">2024</h2>

<div class="course-card">
  <h3>Kino Latino</h3>
  <div class="course-meta">Semestre de verão · com Dr. Janek Scholz · UzK</div>
  <p class="course-desc">Seminário sobre cinema latino-americano em diálogo com a literatura e a sociedade.</p>
</div>

<div class="course-card">
  <h3>Die weiblichen Protagonistinnen von Flaubert, Galdós und Machado de Assis</h3>
  <div class="course-meta">Semestre de inverno 2024/25 · UzK</div>
  <p class="course-desc">Seminário avançado sobre protagonistas femininas no romance francês, espanhol e brasileiro do século XIX.</p>
</div>

<div class="course-card">
  <h3>Malandragem e volubilidade</h3>
  <div class="course-meta">Semestre de inverno 2024/25 · com Prof. Dr. Jorge Grespan · USP</div>
  <p class="course-desc">Seminário avançado sobre conceitos centrais da crítica literária de Roberto Schwarz.</p>
</div>

<div class="course-card">
  <h3>Einführung in die Literaturwissenschaft Portugiesisch</h3>
  <div class="course-meta">Semestre de inverno 2024/25 · UzK</div>
  <p class="course-desc">Curso introdutório aos métodos e conceitos dos estudos literários, com foco na literatura de língua portuguesa.</p>
</div>

<h2 class="year-label">2020</h2>

<div class="course-card">
  <h3>História literária e ideologia no século XIX</h3>
  <div class="course-meta">Semestre de verão · USP</div>
  <p class="course-desc">Seminário avançado sobre a dimensão ideológica da historiografia literária no século XIX.</p>
</div>
