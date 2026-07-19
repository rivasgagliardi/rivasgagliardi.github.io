---
layout: page
permalink: /pt/projects/wolf/
title: Le Brésil littéraire (1863) von Ferdinand Wolf
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
    langDiv.innerHTML = '<a href="/projects/3_wolf/">DE</a> · <a href="/pt/projects/wolf/" class="active">PT</a> · <a href="/en/projects/wolf/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Universidade Livre de Berlim, 2014–2019**

História literária e ideologia no século XIX: este projeto de pesquisa dedicou-se à reconstrução da história de gênese de *Le Brésil littéraire: histoire de la littérature brésilienne* (1863). Essa primeira história da literatura brasileira foi escrita em alemão pelo romanista e funcionário da Biblioteca Imperial e Real Ferdinand Wolf (Viena, 1796–1866), mas veio a público apenas em tradução francesa. O centro da pesquisa é a comparação filológica do manuscrito em alemão, nunca impresso, "Geschichte der brasilianischen Nationalliteratur", com a tradução publicada.

A comparação torna visíveis as diferenças entre as duas versões e entre os paradigmas que as fundamentam: no texto alemão, é possível identificar claramente o projeto político-literário de Wolf em relação à supremacia do "espírito alemão" e da monarquia dos Habsburgo, algo que é decisivamente atenuado no texto francês. A supressão consciente de determinados termos e a introdução de vocabulário ligado a uma tradição de pensamento emancipatório proveniente da Revolução Francesa comprometem, no livro publicado, a coerência da concepção histórica de Wolf, que opera com a linguagem e o pensamento do idealismo alemão.

Além disso, a correspondência de Wolf com estudiosos brasileiros a serviço do imperador Pedro II revela como eles ajudaram a moldar a gênese da obra. O principal interesse de Pedro II era implementar uma agenda político-cultural voltada à manutenção da monarquia e da unidade do país. Tratava-se, sobretudo, de narrar o passado — em especial o passado colonial — a partir de uma perspectiva específica. *Le Brésil littéraire* nasceu, portanto, sob o signo das exigências ideológicas de uma elite transnacional: a historiografia (literária) é aqui empregada como instrumento valioso para construir um passado e difundi-lo como verdade única. A análise da inversão discursiva das relações reais mostra, no entanto, como esses recursos podem servir para fundamentar e consolidar a própria posição de dominação. A abordagem arquivística e histórico-material permite, por fim, disponibilizar um conjunto de materiais até então inéditos e suas transcrições.

**Orientação:** Prof.ª Dr.ª Susanne Zepp-Zwirner; Prof. Dr. Joachim Küpper

**Área:** Filologia Românica

**Financiamento:** [Friedrich Schlegel Graduiertenschule für literaturwissenschaftliche Studien](https://www.geisteswissenschaften.fu-berlin.de/friedrichschlegel/personen/Alumni-Dok/Gagliardi/index.html)

**Publicações**

- [Literaturgeschichte und Ideologie: Ferdinand Wolfs literaturpolitisches Projekt «Le Brésil littéraire»](/pt/publications/#gagliardi2020literaturgeschichte)
- [Transnationally Forged Nationality](/pt/publications/#gagliardi2020transnationally)

**Disciplina ministrada**

- Semestre de verão de 2020, disciplina de pós-graduação: História literária e ideologia no século XIX (DLM-USP)
