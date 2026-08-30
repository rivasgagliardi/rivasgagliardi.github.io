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

<link rel="stylesheet" href="/assets/css/custom.css">
<script src="/assets/js/custom.js"></script>

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
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  setupAboutColumns();
  insertLangSwitcher('/', '/pt/', '/en/', 'pt');

  var map = {
    '/': { text: 'Sobre mim', href: '/pt/' },
    '/books/': { text: 'Livros', href: '/pt/books/' },
    '/publications/': { text: 'Publicações', href: '/pt/publications/' },
    '/projects/': { text: 'Projetos de pesquisa', href: '/pt/projects/' },
    '/cv/': { text: 'Currículo', href: '/pt/cv/' },
    '/teaching/': { text: 'Ensino', href: '/pt/teaching/' }
  };
  translateNav(map);

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

Trabalho, em perspectiva comparada, com literaturas de língua francesa, espanhola e portuguesa do século XVI ao XIX. Minha pesquisa e minha docência concentram-se em autoria feminina, estudos da narrativa e realismo comparado entre Brasil, França e Espanha, sempre sob a óptica da história social das formas literárias. Ocupo-me também da historiografia literária do século XIX e da crítica literária do século XX. No trabalho de arquivo com espólios multilíngues, acompanho a circulação de saberes entre o mundo de língua alemã e o românico. Atualmente sou pesquisadora visitante no Instituto Luso-Brasileiro da Universidade de Colônia, onde preparo minha livre-docência (Habilitation) (https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi).

Meu projeto de Habilitation chama-se provisoriamente *Licentia. Fala feminina e saber crítico em Marguerite de Navarre e María de Zayas*. Nele, estudo grandes coletâneas de novelas da modernidade românica assinadas por mulheres. Volto especial atenção para os espaços em que mulheres narram e julgam: o *cadre* do *Heptaméron* e o *sarao* de Zayas. O termo do título tem uma história dupla: na tradição retórica, *licentia* designa a liberdade de falar diante daqueles a quem se deve reverência ou temor; na vida cotidiana da primeira modernidade, *licencia* é a permissão que subordinados de toda espécie precisavam obter — e uma mulher era quase sempre subordinada de alguém. É entre esses dois sentidos que se situa minha pergunta: quem pode tomar a palavra, diante de quem, e com que pretensão de verdade? O que se faz desses espaços quando o romance do século XIX os ocupa de novo, agora na forma do salão ou da tertúlia, tem sido o tema de meus cursos e de ensaios sobre figuras femininas.

De 2021 a 2024 coordenei na Universidade de Colônia um projeto de pesquisa financiado pela DFG, dedicado ao método crítico de Mário de Andrade, Antonio Candido e Roberto Schwarz. Interessava-me entender como se constituiu no Brasil uma crítica que lê forma literária como processo social. Do projeto resultaram a edição alemã de *Um mestre na periferia do capitalismo*, de Roberto Schwarz, que organizei, e o volume *Roberto Schwarz Beyond Borders*, que coorganizei.

Desse trabalho nasceu, por sua vez, minha dedicação ao teórico da literatura Anatol Rosenfeld: formado em Berlim, tornou-se em São Paulo figura central da crítica brasileira. Releio-o em perspectiva comparatista, a partir de seus arquivos na Casa do Povo, em São Paulo, e na Alemanha. Foi nesse percurso que descobri uma colega de Rosenfeld: a socióloga alemã Irmgard Lang, uma pesquisadora de temas brasileiros até então inteiramente ignorada pela pesquisa. Sua trajetória e sua obra, pude reconstituí-las pela primeira vez no Arquivo da Universidade de Mainz e no Bundesarchiv de Koblenz.

Meu doutorado investiga o projeto político-literário do romanista vienense Ferdinand Wolf, cujo *Le Brésil littéraire*, de 1863, é a primeira história da literatura brasileira: escrita em alemão, impressa em francês. Em Wolfenbüttel, Viena e Rio de Janeiro localizei e editei os documentos de sua gênese. Eles desmentem o consenso brasileiro de que o livro teria sido encomenda de Pedro II, e mostram em seu lugar a incorporação da literatura brasileira ao projeto habsburgo de expansão colonial.

Estudei em São Paulo e em Berlim: Letras (Português e Francês) na Universidade de São Paulo, depois o mestrado em *Angewandte Literaturwissenschaft* e o doutorado (2019) na Freie Universität Berlin. Como pós-doutoranda, pesquisei no Institute of Latin American Studies, em Londres, e na Universidade de São Paulo, antes de ingressar na Universidade de Colônia em 2021.
