---
layout: page
permalink: /en/publications/
title: Publications
description:
nav: false
---
<!-- _pages/publications.md -->
<!-- Bibsearch Feature -->
{% include bib_search.liquid %}
<div class="publications">
{% bibliography %}
</div>
<style>
  .publications h2.bibliography {
    color: var(--global-text-color);
    text-align: left;
    border-top: none;
    padding-top: 0;
    margin-top: 2.5rem;
  }
  #schwarz2023meister .links::after,
  #gagliardi2026tropischer .links::after,
  #gagliardi2025apropriacoes .links::after,
  #gagliardi2024kolonialgeschichte .links::after,
  #gagliardi2023antropofagia .links::after,
  #gagliardi2023einfuehrung .links::after,
  #gagliardi2022aspectos .links::after,
  #gagliardi2022historia .links::after,
  #gagliardi2021invisibilidad .links::after {
    content: "Open Access";
    display: inline-block;
    margin-left: 8px;
    padding: 2px 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #fff;
    background-color: #2e7d32;
    border-radius: 4px;
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

  var covers = {
    'gagliardi2020literaturgeschichte': '/assets/img/cover_wolf.jpg',
    'schwarz2023meister': '/assets/img/cover_ein_meister.jpg',
    'gagliardi2026beyond': '/assets/img/cover_beyond.jpg'
  };
  for (var id in covers) {
    var entry = document.getElementById(id);
    if (entry) {
      var img = document.createElement('img');
      img.src = covers[id];
      img.style.cssText = 'width:90px; height:auto; border-radius:3px; box-shadow:0 1px 4px rgba(0,0,0,0.2); flex-shrink:0;';
      var wrapper = document.createElement('div');
      while (entry.firstChild) {
        wrapper.appendChild(entry.firstChild);
      }
      entry.appendChild(img);
      entry.appendChild(wrapper);
      entry.style.display = 'flex';
      entry.style.gap = '14px';
      entry.style.alignItems = 'flex-start';
    }
  }

  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/publications/">DE</a> · <a href="/pt/publications/">PT</a> · <a href="/en/publications/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }

  var catMap = {
    '1. Monografien': '1. Monographs',
    '2. Herausgaben': '2. Edited Volumes',
    '3. Aufsätze und Buchkapitel': '3. Articles and Book Chapters',
    '4. Aufsätze für Online-Medien': '4. Articles for Online Media',
    '5. Übersetzungen': '5. Translations',
    '6. Besprechungen': '6. Reviews',
    '7. Lexikonartikel': '7. Encyclopedia Entries',
    '8. Interviews': '8. Interviews'
  };
  document.querySelectorAll('.publications h2.bibliography').forEach(function (h2) {
    var t = h2.textContent.trim();
    if (catMap[t]) { h2.textContent = catMap[t]; }
  });

  var textMap = {
    'Hg.': 'Ed.',
    'gemeinsam mit': 'together with',
    'Interview mit': 'Interview with',
    'Verweis auf die Heftseite, nicht auf den Einzelartikel': 'Refers to the issue page, not the individual article'
  };
  var walker = document.createTreeWalker(document.querySelector('.publications'), NodeFilter.SHOW_TEXT);
  var node;
  while (node = walker.nextNode()) {
    var text = node.nodeValue;
    for (var key in textMap) {
      if (text.indexOf(key) !== -1) {
        node.nodeValue = text.split(key).join(textMap[key]);
        text = node.nodeValue;
      }
    }
  }
});
</script>
