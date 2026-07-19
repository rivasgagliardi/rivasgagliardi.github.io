---
layout: page
permalink: /pt/projects/buchmarkt/
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
    langDiv.innerHTML = '<a href="/projects/4_buchmarkt/">DE</a> · <a href="/pt/projects/buchmarkt/" class="active">PT</a> · <a href="/en/projects/buchmarkt/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Universidade Livre de Berlim, 2010–2013**

Os fios que ligam a literatura brasileira à sua mediação em países de língua alemã são, muitas vezes, quase invisíveis. Ainda assim, eles existem: às vezes se rompem, mas voltam a mostrar uma conexão forte e estreita através do Atlântico. As tensões desse movimento fluido, que faz parte da dinâmica da recepção de qualquer cultura, despertam interesse, razão pela qual estão aqui em foco. Este projeto abrange, sobretudo, o lançamento de romances num período de vinte anos, aproximadamente de julho de 1993 a julho de 2013.

A escolha desse recorte temporal se justifica facilmente: primeiro, pelas Feiras do Livro de Frankfurt com foco no Brasil em 1994 e 2013; segundo, pela escassez de pesquisas acadêmicas recentes que unam perspectivas literárias e mercadológicas. As últimas contribuições relevantes sobre o tema datam de pouco antes da virada do século; depois disso, instalou-se um silêncio curioso.

No espaço de língua alemã, a recepção da literatura brasileira esteve quase sempre vinculada ao termo genérico "América Latina", o que já representava um problema em si. O Brasil precisou primeiro se desvencilhar dessa associação imediata para depois se afirmar com sua própria literatura, que não tem nada a ver com traços típicos da literatura hispano-americana, como o *realismo mágico*. Além disso, o chamado boom latino-americano já vivia um declínio nos anos 1990, o que acabou por arrastar o Brasil junto. Um olhar histórico permite refletir sobre o estado atual da pesquisa em estudos brasileiros.

**Orientação:** Prof.ª Dr.ª Susanne Klengel

**Área:** Literatura Geral e Comparada

**Publicação**

- [Contrasts in the Brazilian Book Market at the Beginning of the 21st Century](/pt/publications/#gagliardi2022contrasts)
