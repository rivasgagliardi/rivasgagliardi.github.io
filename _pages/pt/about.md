---
layout: about
title: Sobre mim
permalink: /pt/
subtitle: "Letras Românicas e Teoria Literária"
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
selected_papers: true
social: true
announcements:
  enabled: true
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
  scrollable: true
  limit: 3
nav: false
---

<link rel="stylesheet" href="/assets/css/custom.css">
<script src="/assets/js/custom.js"></script>

<style>
h2:has(> a[href="/publications/"]) {
  font-size: 0;
  margin-top: 2.5rem;
}
h2:has(> a[href="/publications/"])::before {
  content: "Publicações recentes";
  font-size: 1.5rem;
}
h2:has(> a[href="/news/"]) {
  font-size: 0;
}
h2:has(> a[href="/news/"])::before {
  content: "Notícias";
  font-size: 1.5rem;
}
.contact-icons i {
  font-size: 1.3rem;
}
.contact-icons {
  gap: 0.9rem;
}
.col.abbr {
  display: none;
}
.clearfix {
  margin-bottom: 2.5rem;
}
.clearfix p {
  font-size: 1.0625rem;
}
.news-title {
  pointer-events: none;
  color: inherit;
  text-decoration: none;
  cursor: default;
}
#gagliardi2026tropischer .links::after {
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
.navbar-brand {
  display: none;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  setupAboutColumns();
  insertLangSwitcher('/', '/pt/', '/en/', 'pt');

  var map = {
    '/': { text: 'Sobre mim', href: '/pt/' },
    '/books/': { text: 'Livros', href: '/pt/books/' },
    '/publications/': { text: 'Publicações', href: '/pt/publications/' },
    '/projects/': { text: 'Projetos de pesquisa', href: '/pt/projects/' },
    '/cv/': { text: 'Currículo', href: '/pt/cv/' },
    '/teaching/': { text: 'Ensino', href: '/pt/teaching/' }
  };
  translateNav(map);

  var monthMapPt = {Jan:'janeiro', Feb:'fevereiro', Mar:'março', Apr:'abril', May:'maio', Jun:'junho', Jul:'julho', Aug:'agosto', Sep:'setembro', Oct:'outubro', Nov:'novembro', Dec:'dezembro'};
  document.querySelectorAll('.news th').forEach(function (th) {
    var m = th.textContent.trim().match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})$/);
    if (m && monthMapPt[m[1]]) {
      th.textContent = m[2] + ' de ' + monthMapPt[m[1]] + ' de ' + m[3];
    }
  });
  document.querySelectorAll('.news-title').forEach(function (a) {
    a.textContent = a.textContent.replace('Vortrag', 'Palestra');
  });
  var pubSection = document.querySelector('.publications');
  if (pubSection) {
    var pubWalker = document.createTreeWalker(pubSection, NodeFilter.SHOW_TEXT);
    var pubNode;
    while (pubNode = pubWalker.nextNode()) {
      var t = pubNode.nodeValue;
      if (t.indexOf('Hg. gemeinsam mit') !== -1) {
        pubNode.nodeValue = t.replace('Hg. gemeinsam mit', 'Coorganizado com').replace(' und ', ' e ');
      }
    }
  }
});
</script>

Sou pesquisadora e professora assistente no [Instituto Luso-Brasileiro da Universidade de Colônia](https://pbi.phil-fak.uni-koeln.de/pt/equipe/corpo-academico-docente/laura-rivas-gagliardi).

Depois de estudar Letras Português-Francês na Universidade de São Paulo (2007) e concluir o mestrado em Literatura Aplicada na Universidade Livre de Berlim (2013), doutorei-me lá em 2019, como bolsista da Friedrich Schlegel Graduate School of Literary Studies. No pós-doutoramento, pesquisei no Institute of Latin American Studies, em Londres, e no Departamento de Letras Modernas da Universidade de São Paulo, antes de coordenar em Colônia, entre 2021 e 2024, um [projeto de pesquisa financiado pela DFG](https://gepris.dfg.de/gepris/projekt/459579268) sobre o método crítico de Mário de Andrade, Antonio Candido e Roberto Schwarz.

Minha pesquisa atual segue duas linhas: no âmbito da minha Habilitation, investigo, a partir da análise crítica de Antonio Candido e Roberto Schwarz, como e por que figuras femininas se tornam pontos de cristalização de crítica social no romance francês do século XIX e em suas apropriações espanhola e brasileira. O foco está na estrutura dos romances como expressão da tensão entre o modelo francês e as realidades sociais específicas nas quais ele é transposto. Paralelamente, dedico-me à vida e obra do crítico literário Anatol Rosenfeld, cujo pensamento, radicalmente transformado no exílio, busco reler a partir de uma perspectiva comparatista.
