---
layout: page
permalink: /en/projects/dfg/
title: Neuperspektivierungen nachkolonialer Theorie
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
    langDiv.innerHTML = '<a href="/projects/2_dfg/">DE</a> · <a href="/pt/projects/dfg/">PT</a> · <a href="/en/projects/dfg/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>
**University of Cologne, 2021–2024**

On history and knowledge in Brazilian literary criticism: this research project investigated the emergence, development, and formation of literary criticism in the Brazilian context of the twentieth and twenty-first centuries, from a comparative and critical perspective, in light of colonial history. To this end, it considered the work of three canonical authors — Mário de Andrade (1893–1945), Antonio Candido (1918–2017), and Roberto Schwarz (1938) — who, from the standpoint of the research, form a constellation that had not previously been analyzed, either in Brazil or abroad.

All three authors engaged with the persistence of colonial mentality by theoretically examining literature at different historical moments of Brazilian and global history, which allows them to be situated within the field of postcolonial and decolonial studies. The research showed that the link between them is an immanent and dialectical approach to the literary phenomenon, one that takes into account the tension between postcolonial reality and literature.

Although the three authors' approaches differ and respond to specific historical problems, the Andrade–Candido–Schwarz constellation was analyzed in this research primarily with regard to two aspects: the perception of colonial legacy and how it is addressed (for example, in their interpretation of *Modernismo* and *antropofagia*), and the elaboration of their respective methods of literary criticism. The decolonizing approach of the three authors crosses geographical and disciplinary boundaries, offering valuable insights into contemporary phenomena.

**Funding:** [German Research Foundation (DFG)](https://gepris.dfg.de/gepris/projekt/459579268)

**Publications**

- [Roberto Schwarz Beyond Borders](/en/publications/#gagliardi2026beyond)
- [Ein Meister an der Peripherie des Kapitalismus](/en/publications/#schwarz2023meister)
- [Dessacralizando a linguagem colonial: a vanguarda argentina e o modernismo brasileiro](/en/publications/#gagliardi2026dessacralizando)
- [Malandragem and Volubility](/en/publications/#gagliardi2025malandragem)
- [Teatro em tradução: Schwarz e Brecht](/en/publications/#gagliardi2025teatro)
- [Apropriações brechtianas na crítica de Roberto Schwarz](/en/publications/#gagliardi2025apropriacoes)
- [Kolonialgeschichte im Rahmen der Begriffsgeschichte](/en/publications/#gagliardi2024kolonialgeschichte)
- [O império brasileiro em crise](/en/publications/#gagliardi2024imperio)
- [Critique dialectique mise à jour](/en/publications/#gagliardi2023critique)
- [Antropofagia, ein Grundbegriff der brasilianischen Kulturgeschichte](/en/publications/#gagliardi2023antropofagia)
- [Einführung in Roberto Schwarz' kritisches Werk](/en/publications/#gagliardi2023einfuehrung)
- [Sobre Aspectos da Literatura Brasileira, de Mário de Andrade](/en/publications/#gagliardi2022aspectos)
- [História literária antes de 1922](/en/publications/#gagliardi2022historia)

**Courses taught**

- Winter semester 2025/26, advanced seminar: Kolonisation und Emanzipation – Roberto Schwarz und die Herausforderungen der Kritischen Theorie (with Prof. Dr. Jorge Grespan, University of Cologne)
- Winter semester 2024/25, advanced seminar: Malandragem e volubilidade (with Prof. Dr. Jorge Grespan, University of São Paulo)
