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
.about-columns {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}
.about-columns .clearfix {
  flex: 1;
  margin-bottom: 0;
}
.about-columns .profile {
  width: 300px;
  flex-shrink: 0;
  float: none !important;
  position: sticky;
  top: 90px;
}
.about-columns .social {
  margin-top: 1.5rem;
}
.about-columns .profile .contact-icons i {
  font-size: 1.6rem;
}
.about-columns .profile .contact-note {
  font-size: 1rem;
  margin-top: 0.5rem;
}
@media (max-width: 650px) {
  .about-columns {
    flex-direction: column;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var profileDiv = document.querySelector('.profile');
  var bioDiv = document.querySelector('.clearfix');
  if (profileDiv && bioDiv) {
    var wrapper = document.createElement('div');
    wrapper.className = 'about-columns';
    bioDiv.parentNode.insertBefore(wrapper, bioDiv);
    wrapper.appendChild(bioDiv);
    wrapper.appendChild(profileDiv);
  }
  var socialDiv = document.querySelector('.social');
  if (socialDiv && profileDiv) {
    profileDiv.appendChild(socialDiv);
  }

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

  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/">DE</a> · <a href="/pt/" class="active">PT</a> · <a href="/en/">EN</a>';
    container.insertBefore(langDiv, toggler);
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

Sou pesquisadora e professora assistente no [Instituto Luso-Brasileiro da Universidade de Colônia](https://pbi.phil-fak.uni-koeln.de/pt/equipe/corpo-academico-docente/laura-rivas-gagliardi).

Depois de estudar Filologia Portuguesa e Francesa na Universidade de São Paulo (2007) e concluir o mestrado em Literatura Comparada na Universidade Livre de Berlim (2013), doutorei-me lá em 2019, como bolsista da Friedrich Schlegel Graduate School of Literary Studies. No pós-doutoramento, pesquisei no Institute of Latin American Studies, em Londres, e no Departamento de Letras Modernas da Universidade de São Paulo, antes de coordenar em Colônia, entre 2021 e 2024, um [projeto de pesquisa financiado pela DFG](https://gepris.dfg.de/gepris/projekt/459579268)sobre o método crítico de Mário de Andrade, Antonio Candido e Roberto Schwarz.

Minha pesquisa atual segue duas linhas: no âmbito da minha Habilitation, investigo, a partir da análise crítica de Antonio Candido e Roberto Schwarz, como e por que figuras femininas se tornam pontos de cristalização da crítica social literária no romance francês do século XIX e em suas apropriações espanhola e brasileira. O foco está na estrutura formal dos romances como expressão da tensão entre o modelo francês e as realidades sociais específicas nas quais ele é transposto. Paralelamente, dedico-me à vida e obra do crítico literário Anatol Rosenfeld, cujo pensamento, radicalmente transformado no exílio, busco reler a partir de uma perspectiva comparatista.
