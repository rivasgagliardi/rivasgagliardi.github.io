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
    var liDe = document.createElement('li');
    liDe.className = 'nav-item';
    liDe.innerHTML = '<a class="nav-link" href="/">DE</a>';
    var liEn = document.createElement('li');
    liEn.className = 'nav-item';
    liEn.innerHTML = '<a class="nav-link" href="/en/">EN</a>';
    var toggle = list.querySelector('.toggle-container');
    [liDe, liEn].forEach(function (li) {
      if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
    });
  }

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

Laura Rivas Gagliardi é pesquisadora e professora assistente do [Instituto Luso-Brasileiro da Universidade de Colônia](https://pbi.phil-fak.uni-koeln.de/pt/equipe/corpo-academico-docente/laura-rivas-gagliardi).

Após a graduação em Letras (Português e Francês) pela Universidade de São Paulo (2007) e mestrado em Literatura Aplicada pela Universidade Livre de Berlim (2013), doutorou-se nesta última universidade em 2019 com bolsa da Friedrich Schlegel Graduate School of Literary Studies. Como pós-doutoranda, pesquisou no Institute of Latin American Studies, em Londres, e no Departamento de Letras Modernas da Universidade de São Paulo, antes de iniciar, na Universidade de Colônia, em 2021, a direção do [projeto de pesquisa financiado pela DFG](https://gepris.dfg.de/gepris/projekt/459579268) sobre o método crítico de Mário de Andrade, Antonio Candido e Roberto Schwarz, concluído em 2024.

Sua pesquisa atual segue duas linhas: no âmbito de sua livre-docência (Habilitation), investiga a construção literária da emancipação feminina no romance europeu e latino-americano do século XIX; paralelamente, dedica-se a vida e obra do crítico literário Anatol Rosenfeld, cujo pensamento, nascido do exílio, será reelaborado a partir de uma perspectiva comparatista.
