---
layout: page
permalink: /en/projects/buchmarkt/
title: Die Präsenz der brasilianischen Literatur auf dem deutschsprachigen Buchmarkt zwischen 1993 und 2013
nav: false
---

<style>
.section-label {
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 0.5rem;
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
    langDiv.innerHTML = '<a href="/projects/4_buchmarkt/">DE</a> · <a href="/pt/projects/buchmarkt/">PT</a> · <a href="/en/projects/buchmarkt/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Freie Universität Berlin, 2010–2013**

The threads connecting Brazilian literature to its mediation in German-speaking countries are often barely visible. Yet they exist: sometimes they break, only to reveal, once again, a strong and close connection across the Atlantic. The tensions of this fluid movement, which is part of the dynamics of reception in any culture, are of particular interest, which is why they are the focus here. This project covers, above all, the publication of new novels over a period of twenty years, roughly from July 1993 to July 2013.

The choice of this time frame is easily justified: first, by the Frankfurt Book Fairs with a focus on Brazil in 1994 and 2013; second, by the scarcity of recent academic research combining literary and market-based perspectives. The last relevant contributions on the subject date from shortly before the turn of the century; after that, a curious silence set in.

In the German-speaking world, the reception of Brazilian literature was almost always tied to the umbrella term "Latin America," which was itself already a problem. Brazil first had to detach itself from this immediate association before it could assert itself through its own literature — one that has nothing to do with the typical features of Spanish American literature, such as *magical realism*. Moreover, the so-called Latin American boom was already in decline by the 1990s, which ultimately drew Brazil down with it. A historical perspective allows for reflection on the current state of research in Brazilian studies.

**Supervisor:** Prof. Dr. Susanne Klengel

**Field:** General and Comparative Literature

**Publication**

- [Contrasts in the Brazilian Book Market at the Beginning of the 21st Century](/en/publications/#gagliardi2022contrasts)
