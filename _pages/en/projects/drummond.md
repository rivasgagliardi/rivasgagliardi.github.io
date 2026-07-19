---
layout: page
permalink: /en/projects/drummond/
title: Amor infectum – a revolta do singular na lírica de Drummond
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
    langDiv.innerHTML = '<a href="/projects/5_drummond/">DE</a> · <a href="/pt/projects/drummond/">PT</a> · <a href="/en/projects/drummond/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**University of São Paulo, 2002–2006**

In examining the critical reception of Drummond's poetry, the question of how the poet treats the theme of love is of fundamental importance. Broadly speaking, the treatment of this theme proceeds from a lyrical "I" that oscillates, strictly speaking, between social and personal perspectives. The project comprised two funding phases.

In the first phase, the research focused on the love poems published in the collections *Novos poemas* (1948), *Claro enigma* (1951), *Fazendeiro do ar* (1953), and *A vida passada a limpo* (1959). In these books, the singular perspective that runs through and constitutes Drummond's so-called "*gauche* self" ultimately gains a theoretical-speculative primacy within the theme of love. This first phase made it possible to elevate the reading of Drummond's poetics to a further reflective level. The aim of the research was precisely to uncover the revolt of the individual aspect of the lyrical subject and the affirmation of a new mode of being of love. The meaning and scope of this alternative conception of love were designated as "*amor infectum*."

In the second phase of the investigation, the focus shifted to Drummond's early works, in which the dimension of love is clearly linked to the beginnings of *Modernismo*. This means that, here, aesthetic experimentation takes center stage, combined with an exploration of love in its concrete form — despite a more observant and reticent lyrical "I," one that differs in every respect from the lyrical "I" found in the erotic poems of Drummond's later books. Above all, however, the concrete experience of love expands beyond the purely individual dimension, coming to encompass longings for social transformation, in which love represents the key to the world and to future life.

**Supervisor:** Prof. Ivone Daré Rabello

**Field:** General and Comparative Literature

**Funding:** [São Paulo Research Foundation (FAPESP)](https://bv.fapesp.br/pt/bolsas/47501/amor-infectum-a-revolta-do-singular-na-lirica-de-drummond/)

**Award:** Honorable Mention for the research project on Drummond's poetry, University of São Paulo, Office of the Provost for Research, 11th SICUSP, 2003

**Publication**

- [Amor e modernidade na lírica de Drummond](/en/publications/#gagliardi2018drummond)
