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

Sou romanista e trabalho com as literaturas de língua francesa, espanhola e portuguesa do século XVI ao XIX, com ênfase em autoria feminina, teoria da narrativa e história social das formas literárias. Atualmente sou pesquisadora visitante do [Instituto Português-Brasileiro da Universidade de Colônia](https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi).

Meu projeto de livre-docência (*Habilitation*) tem como título de trabalho *Licentia. A fala feminina e o saber crítico em Marguerite de Navarre e María de Zayas*. Ele investiga como as duas grandes coleções de novelas que a primeira modernidade românica legou sob o nome de uma autora fazem do narrar um espaço de fala e de juízo femininos. A palavra do título tem uma história dupla: na tradição retórica, *licentia* nomeia a liberdade de falar diante de quem se deve reverenciar ou temer. No cotidiano da primeira modernidade, *licencia* era a permissão que uma subordinada precisava obter. Seguindo a história dessa palavra, pergunto quem pode tomar a palavra, diante de quem e com que pretensão de conhecimento. O projeto acompanha ainda o destino dos espaços da palavra feminina, o salão e a tertúlia, quando o romance do século XIX os reocupa. Minhas aulas e artigos sobre figuras femininas no romance francês e espanhol do XIX perseguem a mesma questão.

Uma segunda linha de pesquisa nasceu do projeto DFG que dirigi na Universidade de Colônia entre 2021 e 2024 ([posição própria](https://gepris.dfg.de/gepris/projekt/459579268)): o estudo do método crítico de Mário de Andrade, Antonio Candido e Roberto Schwarz — do qual resultou, entre outras publicações, o volume coorganizado *Roberto Schwarz Beyond Borders* (2026) — levou-me à vida e à obra do crítico Anatol Rosenfeld, cujo pensamento, radicalmente transformado no exílio, releio desde então em perspectiva comparatista. Mais recentemente: o levantamento da correspondência inédita entre Rosenfeld e a socióloga de Mainz Irmgard Lang (1926–1957), complementada pelos diários de campo de Lang no Brasil (Arquivo da Universidade de Mainz; Arquivo Federal alemão, Coblença); um artigo está em preparação.

Formei-me em três filologias românicas e em dois países: depois da graduação em Letras — Português e Francês — na Universidade de São Paulo, fiz mestrado em Literatura Comparada e doutorado (2019) na Freie Universität Berlin, como bolsista da Friedrich Schlegel Graduate School of Literary Studies. Como pós-doutoranda, pesquisei no Institute of Latin American Studies, em Londres, e na Universidade de São Paulo, antes de me transferir para Colônia em 2021.
