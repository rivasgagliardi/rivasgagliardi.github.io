---
layout: page
permalink: /pt/projects/dfg/
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
    langDiv.innerHTML = '<a href="/projects/2_dfg/">DE</a> · <a href="/pt/projects/dfg/" class="active">PT</a> · <a href="/en/projects/dfg/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>
**Universidade de Colônia, 2021–2024**

Sobre história e conhecimento na crítica literária brasileira: este projeto de pesquisa investigou o surgimento, o desenvolvimento e a formação da crítica literária no contexto brasileiro dos séculos XX e XXI, a partir de uma perspectiva comparativa e crítica, à luz da história colonial. Para tanto, considerou-se a obra de três autores canônicos — Mário de Andrade (1893–1945), Antonio Candido (1918–2017) e Roberto Schwarz (1938) —, que, do ponto de vista da pesquisa, formam uma constelação até então não analisada, nem no Brasil nem no exterior.

Os três autores se debruçaram sobre a persistência da mentalidade colonial ao examinar teoricamente a literatura em diferentes momentos históricos da história brasileira e global, o que permite situá-los no campo dos estudos pós-coloniais e decoloniais. A pesquisa mostrou que o elo entre eles é uma abordagem imanente e dialética do fenômeno literário, que leva em conta a tensão entre a realidade pós-colonial e a literatura.

Embora as abordagens dos três autores sejam distintas e respondam a problemas históricos específicos, a constelação Andrade–Candido–Schwarz foi analisada, nesta pesquisa, principalmente em relação a dois aspectos: a percepção da herança colonial e o modo de lidar com ela (tomando como exemplo sua interpretação do *Modernismo* e da *antropofagia*), e a elaboração de seus métodos de crítica literária. A abordagem descolonizadora dos três autores ultrapassa fronteiras geográficas e disciplinares, oferecendo perspectivas valiosas sobre fenômenos contemporâneos.

**Financiamento:** [Deutsche Forschungsgemeinschaft](https://gepris.dfg.de/gepris/projekt/459579268)

**Publicações**

- [Roberto Schwarz Beyond Borders](/pt/publications/#gagliardi2026beyond)
- [Ein Meister an der Peripherie des Kapitalismus](/pt/publications/#schwarz2023meister)
- [Dessacralizando a linguagem colonial: a vanguarda argentina e o modernismo brasileiro](/pt/publications/#gagliardi2026dessacralizando)
- [Malandragem and Volubility](/pt/publications/#gagliardi2025malandragem)
- [Teatro em tradução: Schwarz e Brecht](/pt/publications/#gagliardi2025teatro)
- [Apropriações brechtianas na crítica de Roberto Schwarz](/pt/publications/#gagliardi2025apropriacoes)
- [Kolonialgeschichte im Rahmen der Begriffsgeschichte](/pt/publications/#gagliardi2024kolonialgeschichte)
- [O império brasileiro em crise](/pt/publications/#gagliardi2024imperio)
- [Critique dialectique mise à jour](/pt/publications/#gagliardi2023critique)
- [Antropofagia, ein Grundbegriff der brasilianischen Kulturgeschichte](/pt/publications/#gagliardi2023antropofagia)
- [Einführung in Roberto Schwarz' kritisches Werk](/pt/publications/#gagliardi2023einfuehrung)
- [Sobre Aspectos da Literatura Brasileira, de Mário de Andrade](/pt/publications/#gagliardi2022aspectos)
- [História literária antes de 1922](/pt/publications/#gagliardi2022historia)

**Disciplinas ministradas**

**Disciplinas ministradas**

- Semestre de inverno de 2025/26: Kolonisation und Emanzipation – Roberto Schwarz und die Herausforderungen der Kritischen Theorie (com Prof. Dr. Jorge Grespan, UzK)
- Semestre de inverno de 2024/25, disciplina de pós-graduação: Malandragem e volubilidade (com Prof. Dr. Jorge Grespan, DH-USP)
