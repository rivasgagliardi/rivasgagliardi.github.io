---
layout: page
permalink: /pt/cv/
title: Currículo
nav: false
---

<style>
.cv-item {
  border-left: 3px solid var(--global-theme-color);
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}
.cv-date {
  font-size: 0.8rem;
  color: var(--global-theme-color);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}
.cv-title {
  font-weight: 700;
  font-size: 1.05rem;
}
.cv-sub {
  color: var(--global-text-color);
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.cv-item ul {
  margin: 0.3rem 0 0;
  padding-left: 1.1rem;
}
.cv-section-title {
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 0.5rem;
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
  var list = document.querySelector('#navbar .navbar-menu-list');
  if (list) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = '<a class="nav-link" href="/cv/" style="font-weight:600">DE</a>';
    var toggle = list.querySelector('.toggle-container');
    if (toggle) { list.insertBefore(li, toggle); } else { list.appendChild(li); }
  }
});
</script>

**Contato:** mail@laurarivasgagliardi.com &nbsp;·&nbsp; Instituto Luso-Brasileiro, Universidade de Colônia, Albertus-Magnus-Platz, 50923 Köln &nbsp;·&nbsp; Sala 1.305 (Philosophikum) &nbsp;·&nbsp; Atendimento: mediante agendamento por e-mail (semestre de verão de 2026: terças, 15h–16h)

## Atuação profissional

<div class="cv-item">
  <div class="cv-date">2024 – atual</div>
  <div class="cv-title">Pesquisadora (50%)</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, Universidade de Colônia · Colônia, Alemanha</div>
</div>

<div class="cv-item">
  <div class="cv-date">2021 – 2024</div>
  <div class="cv-title">Pesquisadora (cargo próprio financiado externamente)</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, Universidade de Colônia · Colônia, Alemanha</div>
  <ul><li>Financiamento: Deutsche Forschungsgemeinschaft – DFG (German Research Foundation)</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2007 – 2013</div>
  <div class="cv-title">Tradutora e editora</div>
  <div class="cv-sub">Atuação autônoma · Berlim, Alemanha</div>
  <ul><li>07/2011–10/2011: estágio na Editora Suhrkamp, departamento de Literatura Internacional, Berlim</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2009 – 2010</div>
  <div class="cv-title">Monitora (Ensino Médio)</div>
  <div class="cv-sub">Colégio Santa Cruz · São Paulo, Brasil</div>
</div>

<div class="cv-item">
  <div class="cv-date">2005 – 2008</div>
  <div class="cv-title">Professora de Francês e Alemão como língua estrangeira</div>
  <div class="cv-sub">Centro de Línguas, FFLCH, Universidade de São Paulo · São Paulo, Brasil</div>
</div>

## Formação acadêmica

<div class="cv-item">
  <div class="cv-date">2015 – 2019</div>
  <div class="cv-title">Doutorado (Dr. phil.), Literatura Comparada em Línguas Românicas</div>
  <div class="cv-sub">Universidade Livre de Berlim · Berlim, Alemanha · summa cum laude</div>
  <ul>
    <li>Tese: "Le Brésil littéraire (1863) von Ferdinand Wolf. Literaturgeschichte und Ideologie im 19. Jahrhundert"</li>
    <li>Orientadores: Prof.ª Dr.ª Susanne Zepp-Zwirner, Prof. Dr. Joachim Küpper</li>
    <li>Programa de doutorado da Friedrich Schlegel Graduiertenschule für literaturwissenschaftliche Studien (FSGS)</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-date">2010 – 2013</div>
  <div class="cv-title">Mestrado, Literatura Aplicada</div>
  <div class="cv-sub">Universidade Livre de Berlim · Berlim, Alemanha · nota: 1,7</div>
  <ul><li>Dissertação: "Die Präsenz der brasilianischen Literatur auf dem deutschsprachigen Buchmarkt zwischen 1993 und 2013"</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2001 – 2008</div>
  <div class="cv-title">Bacharelado em Letras (Português e Francês)</div>
  <div class="cv-sub">Universidade de São Paulo (FFLCH) · São Paulo, Brasil</div>
  <ul><li>03/2004–03/2005: intercâmbio de língua em Berlim</li></ul>
</div>

## Estágios de pesquisa e docência no exterior

<div class="cv-item">
  <div class="cv-date">Dez. 2025</div>
  <div class="cv-title">Docente visitante, Programa ISAP-DAAD</div>
  <div class="cv-sub">Universidade de São Paulo (FFLCH) · São Paulo, Brasil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Dez. 2024</div>
  <div class="cv-title">Docente visitante, Programa ISAP-DAAD</div>
  <div class="cv-sub">Universidade de São Paulo (FFLCH) · São Paulo, Brasil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Maio – Nov. 2020</div>
  <div class="cv-title">Docente visitante e pesquisa de pós-doutorado</div>
  <div class="cv-sub">Universidade de São Paulo (FFLCH) · São Paulo, Brasil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. – Dez. 2019</div>
  <div class="cv-title">Pesquisa de pós-doutorado</div>
  <div class="cv-sub">University of London, Institute of Latin American Studies (ILAS) · Londres, Reino Unido</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. – Out. 2016</div>
  <div class="cv-title">Pesquisa de arquivo</div>
  <div class="cv-sub">Arquivo Nacional, Arquivo Histórico do Itamaraty · Rio de Janeiro, Brasil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2016</div>
  <div class="cv-title">Pesquisa de arquivo</div>
  <div class="cv-sub">Biblioteca Nacional Austríaca · Viena, Áustria</div>
</div>

## Prêmios e bolsas

<div class="cv-item">
  <div class="cv-date">2016</div>
  <div class="cv-title">Bolsa de doutorado</div>
  <div class="cv-sub">Friedrich Schlegel Graduiertenschule, Universidade Livre de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">2015</div>
  <div class="cv-title">Bolsa de pré-doutoramento</div>
  <div class="cv-sub">Friedrich Schlegel Graduiertenschule, Universidade Livre de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">2005</div>
  <div class="cv-title">Bolsa de pesquisa (renovação)</div>
  <div class="cv-sub">FAPESP</div>
  <ul><li>Renovação do projeto de pesquisa sobre a lírica de Drummond</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2002</div>
  <div class="cv-title">Bolsa de Iniciação Científica</div>
  <div class="cv-sub">FAPESP</div>
  <ul><li>Sobre a lírica de Carlos Drummond de Andrade</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2003</div>
  <div class="cv-title">Menção Honrosa</div>
  <div class="cv-sub">USP, Pró-Reitoria de Pesquisa, 11º SICUSP</div>
  <ul><li>Pelo projeto de pesquisa sobre a lírica de Drummond</li></ul>
</div>

## Experiência com financiamento e pareceres

<div class="cv-item">
  <div class="cv-date">2025</div>
  <div class="cv-title">Programa Emmy Noether — em avaliação</div>
  <div class="cv-sub">Deutsche Forschungsgemeinschaft (DFG)</div>
</div>

<div class="cv-item">
  <div class="cv-date">2025</div>
  <div class="cv-title">Parecerista</div>
  <div class="cv-sub">Narodowe Centrum Nauki (NCN), Polônia</div>
</div>

<div class="cv-item">
  <div class="cv-date">2021 – 2024</div>
  <div class="cv-title">Captação de cargo próprio financiado (Eigene Stelle), 36 meses</div>
  <div class="cv-sub">Deutsche Forschungsgemeinschaft – DFG (German Research Foundation)</div>
  <ul><li>Projeto: Neuperspektivierungen nachkolonialer Theorie [nº 459579268]. Recursos: 246.780 € mais 54.300 € de taxa de programa.</li></ul>
</div>

## Organização de eventos científicos

<div class="cv-item">
  <div class="cv-date">Out. 2025</div>
  <div class="cv-title">7. II. Workshop da Rede de Pesquisa Enfoques brasileiros</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, UzK · com T. Kehren, M. Strasser, C. Cardinali</div>
</div>

<div class="cv-item">
  <div class="cv-date">Fev. 2025</div>
  <div class="cv-title">6. I. Workshop da Rede de Pesquisa Enfoques brasileiros</div>
  <div class="cv-sub">Universidade Johannes Gutenberg de Mainz · com T. Kehren, M. Strasser, P. Mora Madriñán, C. Cardinali</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2024</div>
  <div class="cv-title">5. Simpósio Internacional: Roberto Schwarz Beyond Borders</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, UzK · com M. Strasser, C. Cardinali</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2022</div>
  <div class="cv-title">4. Simpósio Internacional: "Ficou chato ser moderno?"</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, UzK · com P. W. Schulze</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2022 – Mar. 2023</div>
  <div class="cv-title">3. Exposição: Modernismo & Reverberações / Modernismo & Widerklänge (curadoria)</div>
  <div class="cv-sub">Secretaria de Exames, Instituto Luso-Brasileiro, UzK · com P. W. Schulze</div>
</div>

<div class="cv-item">
  <div class="cv-date">Maio 2018</div>
  <div class="cv-title">2. Leitura: Die brasilianische Militärdiktatur erinnern, com Bernardo Kucinski</div>
  <div class="cv-sub">Universidade Livre de Berlim · com S. Zepp-Zwirner</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jan. 2017</div>
  <div class="cv-title">1. Workshop: de/localizing literature</div>
  <div class="cv-sub">Universidade Livre de Berlim · com C. Yurgel</div>
</div>

## Conferências convidadas

<div class="cv-item">
  <div class="cv-date">16.05.2024</div>
  <div class="cv-title">3. Ditadura e revolução na lusofonia dos anos 1970, a partir das canções "Fado Tropical" e "Tanto Mar", de Chico Buarque</div>
  <div class="cv-sub">Instituto de Romanística da Universidade de Viena</div>
</div>

<div class="cv-item">
  <div class="cv-date">25.04.2024</div>
  <div class="cv-title">2. Descaramento, volubilidade, acumulação literária: os conceitos crítico-literários de Roberto Schwarz</div>
  <div class="cv-sub">Centre Marc Bloch, Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">24.03.2022</div>
  <div class="cv-title">1. A Semana de Arte Moderna de 1922: condições e desdobramentos</div>
  <div class="cv-sub">Instituto Ibero-Americano, Berlim</div>
</div>

## Comunicações em eventos científicos

<div class="cv-item">
  <div class="cv-date">02.10.2025</div>
  <div class="cv-title">33. Anthropophagy in 20th-century Brazilian literature and critical thinking</div>
  <div class="cv-sub">Instituto Max Planck de História e Teoria do Direito, Frankfurt</div>
</div>

<div class="cv-item">
  <div class="cv-date">Fev. 2025</div>
  <div class="cv-title">32. O sentido da aventura nas crônicas de viagem de Anatol Rosenfeld</div>
  <div class="cv-sub">I. Workshop Enfoques brasileiros, Mainz</div>
</div>

<div class="cv-item">
  <div class="cv-date">23.–24.01.2025</div>
  <div class="cv-title">31. Dessacralizando a língua dos colonizadores</div>
  <div class="cv-sub">Universidade de Göttingen</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. 2024</div>
  <div class="cv-title">30. O Amazonas literário de Mário de Andrade</div>
  <div class="cv-sub">Escola de Verão, Universidade de Mainz</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set. 2024</div>
  <div class="cv-title">29. Fascismo à latino-americana</div>
  <div class="cv-sub">Instituto de Estudos Culturais de Essen</div>
</div>

<div class="cv-item">
  <div class="cv-date">10.05.2024</div>
  <div class="cv-title">28. Anatol Rosenfeld: Mediation and Translation between Brazil and Germany</div>
  <div class="cv-sub">Mecila (online)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2023</div>
  <div class="cv-title">27. Unmaking and remaking the world</div>
  <div class="cv-sub">Historical Materialism Conference, Londres</div>
</div>

<div class="cv-item">
  <div class="cv-date">Out. 2023</div>
  <div class="cv-title">26. Koselleck nas margens: história dos conceitos no Brasil</div>
  <div class="cv-sub">Leibniz-Zentrum, Berlim</div>
</div>

<details>
<summary style="cursor:pointer; color:var(--global-theme-color); margin: 1rem 0; font-weight:600;">Mostrar mais 25 comunicações</summary>

<div class="cv-item">
  <div class="cv-date">Set. 2023</div>
  <div class="cv-title">25. Gregório de Matos entre órdenes y clases</div>
  <div class="cv-sub">38. Romanistentag, Leipzig</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set. 2023</div>
  <div class="cv-title">24. Alfredo Bosi pensa o império brasileiro</div>
  <div class="cv-sub">15. Lusitanistentag, Zwickau</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set. 2023</div>
  <div class="cv-title">23. Feminismo e modernização na obra de Gilda de Melo e Souza</div>
  <div class="cv-sub">IV Congresso ABRE, Lisboa</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2023</div>
  <div class="cv-title">22. A ficção de Anatol Rosenfeld</div>
  <div class="cv-sub">Global Jewish Literatures in Portuguese, FU Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">Fev. 2023</div>
  <div class="cv-title">21. Reapropiaciones literarias de términos indígenas en Macunaíma</div>
  <div class="cv-sub">XXIII. Deutscher Hispanistentag, Graz</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2022</div>
  <div class="cv-title">20. A crítica literária de Mário de Andrade</div>
  <div class="cv-sub">Université de Rennes 2</div>
</div>

<div class="cv-item">
  <div class="cv-date">Mai. 2022</div>
  <div class="cv-title">19. La critique dialectique mise à jour</div>
  <div class="cv-sub">Université Clermont Auvergne</div>
</div>

<div class="cv-item">
  <div class="cv-date">Mai. 2022</div>
  <div class="cv-title">18. Teatro em tradução: Schwarz e Brecht</div>
  <div class="cv-sub">Université de Lorraine, Metz</div>
</div>

<div class="cv-item">
  <div class="cv-date">Out. 2021</div>
  <div class="cv-title">17. Roberto Schwarz, leitor de Adorno</div>
  <div class="cv-sub">Universidade de Gießen / Ciera (online)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set. 2021</div>
  <div class="cv-title">16. O Sentido da Dialética na Crítica de Candido e Schwarz</div>
  <div class="cv-sub">III Congresso ABRE (online, Praga)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. 2021</div>
  <div class="cv-title">15. Sobre a recepção da Escola de Frankfurt no Brasil</div>
  <div class="cv-sub">Université de Lorraine (online)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Fev. 2020</div>
  <div class="cv-title">14. Antonio Candido's 'The Right to Literature'</div>
  <div class="cv-sub">Exeter College, University of Oxford</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set. 2019</div>
  <div class="cv-title">13. Nacionalismo e escrita da história literária brasileira no século XIX</div>
  <div class="cv-sub">EHESS, Paris</div>
</div>

<div class="cv-item">
  <div class="cv-date">Dez. 2018</div>
  <div class="cv-title">12. O avesso de si, o outro: Clarice Lispector</div>
  <div class="cv-sub">The Hebrew University of Jerusalem</div>
</div>

<div class="cv-item">
  <div class="cv-date">Abr. 2018</div>
  <div class="cv-title">11. A expedição da Novara no Rio de Janeiro, 1857</div>
  <div class="cv-sub">Universidade Humboldt de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set. 2017</div>
  <div class="cv-title">10. Historiografia literária a partir de Le Brésil littéraire</div>
  <div class="cv-sub">FSGS, Universidade Livre de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">Fev. 2017</div>
  <div class="cv-title">9. Drummond: o sentimento do mundo e das coisas</div>
  <div class="cv-sub">FSGS, Universidade Livre de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2016</div>
  <div class="cv-title">8. Writing Portuguese and Brazilian Literary History: Ferdinand Wolf</div>
  <div class="cv-sub">Universidade Livre de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. 2016</div>
  <div class="cv-title">7. Contrastes do mercado editorial brasileiro</div>
  <div class="cv-sub">Universidade Livre de Berlim</div>
</div>

<div class="cv-item">
  <div class="cv-date">Set.–Out. 2013</div>
  <div class="cv-title">6. Oficina de tradução ViceVersa: "Brücke und Tür", de Georg Simmel</div>
  <div class="cv-sub">Literarisches Colloquium Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2006</div>
  <div class="cv-title">5. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">14º Simpósio Internacional de Iniciação Científica da USP</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2005</div>
  <div class="cv-title">4. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">13º Simpósio Internacional de Iniciação Científica da USP</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2003</div>
  <div class="cv-title">3. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">11º Simpósio Internacional de Iniciação Científica da USP</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2002</div>
  <div class="cv-title">2. Amor infectum: observações sobre a lírica amorosa de Carlos Drummond de Andrade</div>
  <div class="cv-sub">III Jornada Científica, Faculdades Integradas de Ribeirão Pires</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2002</div>
  <div class="cv-title">1. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">10º Simpósio Internacional de Iniciação Científica da USP</div>
</div>

</details>

## Gestão acadêmica

<div class="cv-item">
  <div class="cv-date">2026</div>
  <div class="cv-title">5. Colaboração no Online-Self-Assessment de Português/Francês</div>
  <div class="cv-sub">Universidade de Colônia, fev.–mar. 2026</div>
</div>

<div class="cv-item">
  <div class="cv-date">2025</div>
  <div class="cv-title">4. Primeira examinadora de trabalho de conclusão de curso — Luca Basile</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, UzK, 29.09.2025</div>
</div>

<div class="cv-item">
  <div class="cv-date">2024</div>
  <div class="cv-title">3. Colaboração no site institucional e na estratégia de redes sociais</div>
  <div class="cv-sub">Instituto Luso-Brasileiro, UzK, abr.–ago. 2024</div>
</div>

<div class="cv-item">
  <div class="cv-date">desde 2023</div>
  <div class="cv-title">2. Membro do projeto "Portugueses de Papel"</div>
  <div class="cv-sub">Universidade de Lisboa</div>
</div>

<div class="cv-item">
  <div class="cv-date">2022</div>
  <div class="cv-title">1. Membro de banca de mestrado — César Marins de Oliveira</div>
  <div class="cv-sub">Universidade de São Paulo, jun. 2022</div>
</div>

## Idiomas

Português (primeira língua) · Alemão, Francês, Espanhol (fluência em fala e escrita) · Inglês (muito bom domínio) · Latim, Italiano (bom domínio)
