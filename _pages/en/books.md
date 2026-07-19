---
layout: page
permalink: /en/books/
title: Books
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
    liDe.innerHTML = '<a class="nav-link" href="/books/">DE</a>';
    var liPt = document.createElement('li');
    liPt.className = 'nav-item';
    liPt.innerHTML = '<a class="nav-link" href="/pt/books/">PT</a>';
    var liEn = document.createElement('li');
    liEn.className = 'nav-item';
    liEn.innerHTML = '<a class="nav-link" href="/en/books/" style="font-weight:600">EN</a>';
    var toggle = list.querySelector('.toggle-container');
    [liDe, liPt, liEn].forEach(function (li) {
      if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
    });
  }
});
</script>

<figure class="cover">
  <a href="/en/publications/#gagliardi2020literaturgeschichte">
    <img alt="Literaturgeschichte und Ideologie cover" src="/assets/img/cover_wolf.jpg">
  </a>
</figure>
<figure class="cover">
  <a href="/en/publications/#schwarz2023meister">
    <img alt="Ein Meister an der Peripherie des Kapitalismus cover" src="/assets/img/cover_ein_meister.jpg">
  </a>
</figure>
<figure class="cover">
  <a href="/en/publications/#gagliardi2026beyond">
    <img alt="Roberto Schwarz Beyond Borders cover" src="/assets/img/cover_beyond.jpg">
  </a>
</figure>
