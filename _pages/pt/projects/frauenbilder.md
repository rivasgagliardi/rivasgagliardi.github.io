---
layout: page
permalink: /pt/projects/frauenbilder/
title: Frauenbilder im Wandel
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
    langDiv.innerHTML = '<a href="/projects/1_frauenbilder/">DE</a> · <a href="/pt/projects/frauenbilder/" class="active">PT</a> · <a href="/en/projects/frauenbilder/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Universidade de Colônia, desde 2024**

O projeto de livre-docência (Habilitation) "Frauenbilder im Wandel" dedica-se a um estudo comparativo de figuras femininas em romances franceses, espanhóis, portugueses e brasileiros do século XIX. Partindo da pergunta de como e por que personagens femininas funcionam como pontos de cristalização da crítica literária à sociedade, o trabalho investiga as funções narrativas de diferentes tipos de personagens no campo de tensão entre ideais burgueses e realidades materiais. Uma comparação transatlântica permite identificar semelhanças e diferenças em aspectos centrais da realidade da vida das mulheres — como trabalho, casamento, educação, sexualidade e participação pública — e relacioná-las com discursos históricos de emancipação.

Metodologicamente, o projeto se orienta pela análise crítica da literatura e da sociedade de Antonio Candido e Roberto Schwarz. O objetivo é ir além da pesquisa de motivos ou de cor local, e ler a estrutura formal dos romances (perspectiva narrativa, construção do enredo, estilo) como expressão de diferentes configurações sociais. Nesse sentido, dá-se atenção especial à relação de tensão descrita por Schwarz entre a adoção de modelos romanescos europeus e a realidade social específica do Brasil.

Por meio da análise comparativa de um corpus de oito a quinze romances — entre eles obras de Gustave Flaubert, Emilia Pardo Bazán, Eça de Queirós e Machado de Assis — leituras canônicas tradicionais não são apenas relativizadas, mas a própria teoria crítica é ampliada por uma perspectiva de gênero. Além disso, é um objetivo central do projeto incluir autoras como George Sand, Fernán Caballero e Júlia Lopes de Almeida, tornando visível sua contribuição ao discurso literário do século XIX e abrindo o olhar para a diversidade da agência feminina e da criação literária.

**Disciplinas ministradas**

- Semestre de verão de 2026: Romane von Frauen aus dem 19. Jahrhundert: Sand, Caballero und Lopes de Almeida (UzK)
- Semestre de inverno de 2025/26, disciplina de pós-graduação: Personagens femininas do romantismo ao realismo nas literaturas francesa, espanhola e brasileira (DTLLC-USP)
- Semestre de inverno de 2025/26: Das Leben der Frauen in den Romanen von Balzac, Clarín und Alencar (UzK)
- Semestre de verão de 2025: Der Realismus bei Eça de Queirós, Émile Zola und Pardo Bazán (UzK)
- Semestre de inverno de 2024/25: Die weiblichen Protagonistinnen von Flaubert, Galdós und Machado de Assis (UzK)
