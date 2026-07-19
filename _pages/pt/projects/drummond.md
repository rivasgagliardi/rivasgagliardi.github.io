---
layout: page
permalink: /pt/projects/drummond/
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
    langDiv.innerHTML = '<a href="/projects/5_drummond/">DE</a> · <a href="/pt/projects/drummond/" class="active">PT</a> · <a href="/en/projects/drummond/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Universidade de São Paulo, 2002–2006**

No exame do contexto de recepção crítica da lírica de Drummond, a pergunta sobre como o poeta trata o tema do amor é de importância fundamental. De modo geral, o tratamento desse tema parte de um eu que oscila, em sentido estrito, entre perspectivas sociais e pessoais. O projeto compreendeu duas fases de financiamento.

Na primeira fase, o foco da pesquisa recaiu sobre os poemas de amor publicados nas obras *Novos poemas* (1948), *Claro enigma* (1951), *Fazendeiro do ar* (1953) e *A vida passada a limpo* (1959). Nesses livros, a perspectiva singular que atravessa e constitui o chamado "eu-*gauche*" de Drummond ganha, por fim, uma primazia teórico-especulativa na temática amorosa. Nessa primeira fase, foi possível elevar a leitura da poética de Drummond a um outro plano reflexivo. O objetivo da pesquisa era justamente revelar a revolta do aspecto individual do sujeito lírico e a afirmação de um novo modo de ser do amor. O sentido e o alcance dessa outra concepção de amor foram designados como "*amor infectum*".

Na segunda fase da investigação, o foco se voltou para as obras iniciais de Drummond, nas quais a dimensão do amor está claramente vinculada aos primórdios do *Modernismo*. Isso significa que, aqui, o experimentalismo estético ocupa o primeiro plano, associado à exploração do amor em sua forma concreta — apesar de um eu lírico mais observador e tímido, que se distingue em todos os sentidos do eu lírico presente nos poemas eróticos dos livros posteriores de Drummond. Mas, sobretudo, a experiência concreta do amor se expande para além da dimensão puramente individual, passando a abarcar anseios de transformação social, nos quais o amor representa a chave para o mundo e para a vida futura.

**Orientação:** Prof.ª Dr.ª Ivone Daré Rabello

**Área:** Literatura Geral e Comparada

**Financiamento:** [Fundação de Amparo à Pesquisa do Estado de São Paulo (Fapesp)](https://bv.fapesp.br/pt/bolsas/47501/amor-infectum-a-revolta-do-singular-na-lirica-de-drummond/)

**Prêmios:** Menção Honrosa pelo projeto de pesquisa sobre a lírica de Drummond, USP, Pró-Reitoria de Pesquisa, 11º SICUSP, 2003

**Publicação**

- [Amor e modernidade na lírica de Drummond](/pt/publications/#gagliardi2018drummond)
