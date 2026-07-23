---
layout: page
permalink: /pt/publications/
title: Publicações
description:
nav: false
---
<link rel="stylesheet" href="/assets/css/custom.css">
<script src="/assets/js/custom.js"></script>

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
  translateNav(map);

  insertCovers({
    'gagliardi2020literaturgeschichte': '/assets/img/cover_wolf.jpg',
    'schwarz2023meister': '/assets/img/cover_ein_meister.jpg',
    'gagliardi2026beyond': '/assets/img/cover_beyond.jpg'
  });

  insertLangSwitcher('/publications/', '/pt/publications/', '/en/publications/', 'pt');

  var catMap = {
    '1. Monografien': '1. Monografias',
    '2. Herausgaben': '2. Edições',
    '3. Aufsätze und Buchkapitel': '3. Artigos e capítulos de livro',
    '4. Aufsätze für Online-Medien': '4. Artigos para mídias online',
    '5. Übersetzungen': '5. Traduções',
    '6. Besprechungen': '6. Resenhas',
    '7. Lexikonartikel': '7. Verbetes de dicionário',
    '8. Interviews': '8. Entrevistas'
  };
  document.querySelectorAll('.publications h2.bibliography').forEach(function (h2) {
    var t = h2.textContent.trim();
    if (catMap[t]) { h2.textContent = catMap[t]; }
  });

  var textMap = {
    'Website': 'Site',
    'Hg.': 'Org.',
    'gemeinsam mit': 'em conjunto com',
    'Interview mit': 'Entrevista com',
    'Verweis auf die Heftseite, nicht auf den Einzelartikel': 'Refere-se à página do número, não ao artigo avulso'
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
