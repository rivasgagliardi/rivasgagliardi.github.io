---
layout: about
title: About
permalink: /en/
subtitle: "Romance Studies and Literary Theory"
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
more_info: >
  <p>Contact: <a href="mailto:mail@laurarivasgagliardi.com">mail@laurarivasgagliardi.com</a></p>
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
  content: "Recent Publications";
  font-size: 1.5rem;
}
h2:has(> a[href="/news/"]) {
  font-size: 0;
}
h2:has(> a[href="/news/"])::before {
  content: "News";
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

  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/">DE</a> · <a href="/pt/">PT</a> · <a href="/en/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }

  var pubSection = document.querySelector('.publications');
  if (pubSection) {
    var pubWalker = document.createTreeWalker(pubSection, NodeFilter.SHOW_TEXT);
    var pubNode;
    while (pubNode = pubWalker.nextNode()) {
      var t = pubNode.nodeValue;
      if (t.indexOf('Hg. gemeinsam mit') !== -1) {
        pubNode.nodeValue = t.replace('Hg. gemeinsam mit', 'Co-edited with').replace(' und ', ' and ');
      }
    }
  }
});
</script>

I am a research associate at the [Portuguese-Brazilian Institute of the University of Cologne](https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi).

After studying Portuguese and French Philology at the University of São Paulo (2007) and completing a Master's degree in Comparative Literature at the Freie Universität Berlin (2013), I received my PhD there in 2019 as a fellow of the Friedrich Schlegel Graduate School of Literary Studies. As a postdoctoral researcher, I worked at the Institute of Latin American Studies in London and at the Departamento de Letras Modernas of the University of São Paulo, before moving to Cologne in 2021, where until 2024 I led a [research project funded by the German Research Foundation (DFG)](https://gepris.dfg.de/gepris/projekt/459579268) on the critical method of Mário de Andrade, Antonio Candido, and Roberto Schwarz.

My current research follows two lines: within my Habilitation project, I draw on the critical literary and social analysis of Antonio Candido and Roberto Schwarz to examine how and why female characters become crystallization points of literary social critique in the French novel of the nineteenth century and in its Spanish and Brazilian appropriations. The focus lies on the novels' formal structure as an expression of the tension between the French model and the specific social realities into which it is transposed. In parallel, I am working on the life and work of the literary theorist Anatol Rosenfeld, rereading his exile-born thought from a comparatist perspective.
