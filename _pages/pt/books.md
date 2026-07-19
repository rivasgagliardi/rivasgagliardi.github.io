---
layout: page
permalink: /pt/books/
title: Livros
nav: false
---

<style>
article {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.cover img {
  height: 320px !important;
  width: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
    li.innerHTML = '<a class="nav-link" href="/" style="font-weight:600">DE</a>';
    var toggle = list.querySelector('.toggle-container');
    if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
  }
});
</script>

<figure class="cover">
  <a href="/pt/publications/#gagliardi2020literaturgeschichte">
    <img alt="Literaturgeschichte und Ideologie cover" src="/assets/img/cover_wolf.jpg">
  </a>
</figure>
<figure class="cover">
  <a href="/pt/publications/#schwarz2023meister">
    <img alt="Ein Meister an der Peripherie des Kapitalismus cover" src="/assets/img/cover_ein_meister.jpg">
  </a>
</figure>
<figure class="cover">
  <a href="/pt/publications/#gagliardi2026beyond">
    <img alt="Roberto Schwarz Beyond Borders cover" src="/assets/img/cover_beyond.jpg">
  </a>
</figure>
