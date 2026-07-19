---
layout: page
permalink: /en/cv/
title: CV
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
    langDiv.innerHTML = '<a href="/cv/">DE</a> · <a href="/pt/cv/">PT</a> · <a href="/en/cv/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Contact:** mail@laurarivasgagliardi.com &nbsp;·&nbsp; Portuguese-Brazilian Institute, University of Cologne, Albertus-Magnus-Platz, 50923 Cologne &nbsp;·&nbsp; Room 1.305 (Philosophikum) &nbsp;·&nbsp; Office hours: by appointment via email (Summer semester 2026: Tue 15:00–16:00)

## Professional Career

<div class="cv-item">
  <div class="cv-date">2024 – present</div>
  <div class="cv-title">Research Associate (50%)</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne · Cologne, Germany</div>
</div>

<div class="cv-item">
  <div class="cv-date">2021 – 2024</div>
  <div class="cv-title">Research Associate (externally funded position)</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne · Cologne, Germany</div>
  <ul><li>Funding: German Research Foundation (DFG) — Temporary Position for Principal Investigators ("Eigene Stelle")</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2007 – 2013</div>
  <div class="cv-title">Editor and Translator</div>
  <div class="cv-sub">Freelance · Berlin, Germany</div>
  <ul><li>07/2011–10/2011: Internship at Suhrkamp Publishers, International Literature Department, Berlin</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2009 – 2010</div>
  <div class="cv-title">Teaching Assistant (Secondary School)</div>
  <div class="cv-sub">Colégio Santa Cruz · São Paulo, Brazil</div>
</div>

<div class="cv-item">
  <div class="cv-date">2005 – 2008</div>
  <div class="cv-title">Teacher of French and German as Foreign Languages</div>
  <div class="cv-sub">Language Center, School of Philosophy, Letters and Human Sciences, University of São Paulo · São Paulo, Brazil</div>
</div>

## Academic Education

<div class="cv-item">
  <div class="cv-date">2015 – 2019</div>
  <div class="cv-title">PhD (Dr. phil.), Romance Literary Studies</div>
  <div class="cv-sub">Freie Universität Berlin · Berlin, Germany · summa cum laude</div>
  <ul>
    <li>Dissertation: "Le Brésil littéraire (1863) von Ferdinand Wolf. Literaturgeschichte und Ideologie im 19. Jahrhundert"</li>
    <li>Supervisors: Prof. Dr. Susanne Zepp-Zwirner, Prof. Dr. Joachim Küpper</li>
    <li>Doctoral program of the Friedrich Schlegel Graduate School of Literary Studies (FSGS)</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-date">2010 – 2013</div>
  <div class="cv-title">Master of Arts, Applied Literary Studies</div>
  <div class="cv-sub">Freie Universität Berlin · Berlin, Germany · grade: 1.7 (German scale)</div>
  <ul><li>Thesis: "Die Präsenz der brasilianischen Literatur auf dem deutschsprachigen Buchmarkt zwischen 1993 und 2013"</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2001 – 2008</div>
  <div class="cv-title">Bachelor's Degree, Portuguese and French Language and Literature</div>
  <div class="cv-sub">University of São Paulo (School of Philosophy, Letters and Human Sciences) · São Paulo, Brazil</div>
  <ul><li>03/2004–03/2005: Language stay in Berlin</li></ul>
</div>

## International Stays and Visiting Positions

<div class="cv-item">
  <div class="cv-date">Dec. 2025</div>
  <div class="cv-title">Visiting Lecturer, DAAD ISAP Programme</div>
  <div class="cv-sub">University of São Paulo (School of Philosophy, Letters and Human Sciences) · São Paulo, Brazil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Dec. 2024</div>
  <div class="cv-title">Visiting Lecturer, DAAD ISAP Programme</div>
  <div class="cv-sub">University of São Paulo (School of Philosophy, Letters and Human Sciences) · São Paulo, Brazil</div>
</div>

<div class="cv-item">
  <div class="cv-date">May – Nov. 2020</div>
  <div class="cv-title">Visiting Professor and Postdoctoral Research</div>
  <div class="cv-sub">University of São Paulo (School of Philosophy, Letters and Human Sciences) · São Paulo, Brazil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. – Dec. 2019</div>
  <div class="cv-title">Postdoctoral Research</div>
  <div class="cv-sub">University of London, Institute of Latin American Studies (ILAS) · London, UK</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. – Oct. 2016</div>
  <div class="cv-title">Archival Research</div>
  <div class="cv-sub">Arquivo Nacional, Arquivo Histórico do Itamaraty · Rio de Janeiro, Brazil</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2016</div>
  <div class="cv-title">Archival Research</div>
  <div class="cv-sub">Austrian National Library · Vienna, Austria</div>
</div>

## Awards and Fellowships

<div class="cv-item">
  <div class="cv-date">2016</div>
  <div class="cv-title">Doctoral Fellowship</div>
  <div class="cv-sub">Friedrich Schlegel Graduate School, Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">2015</div>
  <div class="cv-title">Pre-Doctoral Fellowship</div>
  <div class="cv-sub">Friedrich Schlegel Graduate School, Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">2005</div>
  <div class="cv-title">Research Grant (Renewal)</div>
  <div class="cv-sub">São Paulo Research Foundation (FAPESP)</div>
  <ul><li>Renewal of the research project on Drummond's poetry</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2002</div>
  <div class="cv-title">Undergraduate Research Fellowship</div>
  <div class="cv-sub">São Paulo Research Foundation (FAPESP)</div>
  <ul><li>On the poetry of Carlos Drummond de Andrade</li></ul>
</div>

<div class="cv-item">
  <div class="cv-date">2003</div>
  <div class="cv-title">Honorable Mention</div>
  <div class="cv-sub">University of São Paulo, Office of the Provost for Research, 11th SICUSP</div>
  <ul><li>For the research project on Drummond's poetry</li></ul>
</div>

## Funding and Peer Review Experience

<div class="cv-item">
  <div class="cv-date">2025</div>
  <div class="cv-title">Emmy Noether Programme — under review</div>
  <div class="cv-sub">German Research Foundation (DFG)</div>
</div>

<div class="cv-item">
  <div class="cv-date">2025</div>
  <div class="cv-title">Peer Reviewer</div>
  <div class="cv-sub">Narodowe Centrum Nauki (NCN), Poland</div>
</div>

<div class="cv-item">
  <div class="cv-date">2021 – 2024</div>
  <div class="cv-title">Acquisition of a Temporary Position for Principal Investigators ("Eigene Stelle"), 36 months</div>
  <div class="cv-sub">German Research Foundation (DFG)</div>
  <ul><li>Project: Neuperspektivierungen nachkolonialer Theorie [no. 459579268]. Funding: €246,780 plus €54,300 programme allowance (Programmpauschale).</li></ul>
</div>

## Organisation of Scientific Events

<div class="cv-item">
  <div class="cv-date">Oct. 2025</div>
  <div class="cv-title">7. II. Workshop of the Research Network Enfoques brasileiros</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne · with T. Kehren, M. Strasser, C. Cardinali</div>
</div>

<div class="cv-item">
  <div class="cv-date">Feb. 2025</div>
  <div class="cv-title">6. I. Workshop of the Research Network Enfoques brasileiros</div>
  <div class="cv-sub">Johannes Gutenberg University Mainz · with T. Kehren, M. Strasser, P. Mora Madriñán, C. Cardinali</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2024</div>
  <div class="cv-title">5. International Symposium: Roberto Schwarz Beyond Borders</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne · with M. Strasser, C. Cardinali</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2022</div>
  <div class="cv-title">4. International Symposium: "Ficou chato ser moderno?"</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne · with P. W. Schulze</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2022 – Mar. 2023</div>
  <div class="cv-title">3. Exhibition: Modernismo & Reverberações / Modernismo & Widerklänge (Curator)</div>
  <div class="cv-sub">Examinations Office, Portuguese-Brazilian Institute, University of Cologne · with P. W. Schulze</div>
</div>

<div class="cv-item">
  <div class="cv-date">May 2018</div>
  <div class="cv-title">2. Reading: Die brasilianische Militärdiktatur erinnern, with Bernardo Kucinski</div>
  <div class="cv-sub">Freie Universität Berlin · with S. Zepp-Zwirner</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jan. 2017</div>
  <div class="cv-title">1. Workshop: de/localizing literature</div>
  <div class="cv-sub">Freie Universität Berlin · with C. Yurgel</div>
</div>

## Invited Lectures

<div class="cv-item">
  <div class="cv-date">16.05.2024</div>
  <div class="cv-title">3. Dictatorship and Revolution in the Lusophone 1970s: Chico Buarque's Songs "Fado Tropical" and "Tanto Mar"</div>
  <div class="cv-sub">Institute for Romance Studies, University of Vienna</div>
</div>

<div class="cv-item">
  <div class="cv-date">25.04.2024</div>
  <div class="cv-title">2. Unverschämtheit, Volubilität, literarische Akkumulation: Roberto Schwarz' Concepts in Literary Criticism</div>
  <div class="cv-sub">Centre Marc Bloch, Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">24.03.2022</div>
  <div class="cv-title">1. A Semana de Arte Moderna de 1922: Conditions and Consequences</div>
  <div class="cv-sub">Ibero-American Institute, Berlin</div>
</div>

## Conference Presentations

<div class="cv-item">
  <div class="cv-date">02.10.2025</div>
  <div class="cv-title">33. Anthropophagy in 20th-century Brazilian literature and critical thinking</div>
  <div class="cv-sub">Max Planck Institute for Legal History and Legal Theory, Frankfurt</div>
</div>

<div class="cv-item">
  <div class="cv-date">Feb. 2025</div>
  <div class="cv-title">32. O sentido da aventura nas crônicas de viagem de Anatol Rosenfeld</div>
  <div class="cv-sub">I. Workshop Enfoques brasileiros, Mainz</div>
</div>

<div class="cv-item">
  <div class="cv-date">23.–24.01.2025</div>
  <div class="cv-title">31. Dessacralizando a língua dos colonizadores</div>
  <div class="cv-sub">University of Göttingen</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. 2024</div>
  <div class="cv-title">30. Der literarische Amazonas von Mário de Andrade</div>
  <div class="cv-sub">Summer School, University of Mainz</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept. 2024</div>
  <div class="cv-title">29. Faschismus nach lateinamerikanischer Art</div>
  <div class="cv-sub">Institute for Cultural Studies Essen</div>
</div>

<div class="cv-item">
  <div class="cv-date">10.05.2024</div>
  <div class="cv-title">28. Anatol Rosenfeld: Mediation and Translation between Brazil and Germany</div>
  <div class="cv-sub">Mecila (Online)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2023</div>
  <div class="cv-title">27. Unmaking and remaking the world</div>
  <div class="cv-sub">Historical Materialism Conference, London</div>
</div>

<div class="cv-item">
  <div class="cv-date">Oct. 2023</div>
  <div class="cv-title">26. Koselleck an den Rändern: Begriffsgeschichte in Brasilien</div>
  <div class="cv-sub">Leibniz Center, Berlin</div>
</div>

<details>
<summary style="cursor:pointer; color:var(--global-theme-color); margin: 1rem 0; font-weight:600;">Show 25 more presentations</summary>

<div class="cv-item">
  <div class="cv-date">Sept. 2023</div>
  <div class="cv-title">25. Gregório de Matos entre órdenes y clases</div>
  <div class="cv-sub">38th Romanistentag, Leipzig</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept. 2023</div>
  <div class="cv-title">24. Alfredo Bosi pensa o império brasileiro</div>
  <div class="cv-sub">15th Lusitanistentag, Zwickau</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept. 2023</div>
  <div class="cv-title">23. Feminismo e modernização na obra de Gilda de Melo e Souza</div>
  <div class="cv-sub">IV Congresso ABRE, Lisbon</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2023</div>
  <div class="cv-title">22. A ficção de Anatol Rosenfeld</div>
  <div class="cv-sub">Global Jewish Literatures in Portuguese, Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Feb. 2023</div>
  <div class="cv-title">21. Reapropiaciones literarias de términos indígenas en Macunaíma</div>
  <div class="cv-sub">XXIII. Deutscher Hispanistentag, Graz</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2022</div>
  <div class="cv-title">20. A crítica literária de Mário de Andrade</div>
  <div class="cv-sub">Université de Rennes 2</div>
</div>

<div class="cv-item">
  <div class="cv-date">May 2022</div>
  <div class="cv-title">19. La critique dialectique mise à jour</div>
  <div class="cv-sub">Université Clermont Auvergne</div>
</div>

<div class="cv-item">
  <div class="cv-date">May 2022</div>
  <div class="cv-title">18. Teatro em tradução: Schwarz e Brecht</div>
  <div class="cv-sub">Université de Lorraine, Metz</div>
</div>

<div class="cv-item">
  <div class="cv-date">Oct. 2021</div>
  <div class="cv-title">17. Roberto Schwarz, leitor de Adorno</div>
  <div class="cv-sub">University of Gießen / Ciera (Online)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept. 2021</div>
  <div class="cv-title">16. O Sentido da Dialética na Crítica de Candido e Schwarz</div>
  <div class="cv-sub">III Congresso ABRE (Online, Prague)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. 2021</div>
  <div class="cv-title">15. Sobre a recepção da Escola de Frankfurt no Brasil</div>
  <div class="cv-sub">Université de Lorraine (Online)</div>
</div>

<div class="cv-item">
  <div class="cv-date">Feb. 2020</div>
  <div class="cv-title">14. Antonio Candido's 'The Right to Literature'</div>
  <div class="cv-sub">Exeter College, University of Oxford</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept. 2019</div>
  <div class="cv-title">13. Nacionalismo e escrita da história literária brasileira no século XIX</div>
  <div class="cv-sub">EHESS, Paris</div>
</div>

<div class="cv-item">
  <div class="cv-date">Dec. 2018</div>
  <div class="cv-title">12. O avesso de si, o outro: Clarice Lispector</div>
  <div class="cv-sub">The Hebrew University of Jerusalem</div>
</div>

<div class="cv-item">
  <div class="cv-date">Apr. 2018</div>
  <div class="cv-title">11. Die Novara-Expedition in Rio de Janeiro, 1857</div>
  <div class="cv-sub">Humboldt-Universität zu Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept. 2017</div>
  <div class="cv-title">10. Literaturgeschichtsschreibung am Beispiel von Le Brésil littéraire</div>
  <div class="cv-sub">Friedrich Schlegel Graduate School, Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Feb. 2017</div>
  <div class="cv-title">9. Drummond: das Gefühl der Welt und der Dinge</div>
  <div class="cv-sub">Friedrich Schlegel Graduate School, Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2016</div>
  <div class="cv-title">8. Writing Portuguese and Brazilian Literary History: Ferdinand Wolf</div>
  <div class="cv-sub">Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jul. 2016</div>
  <div class="cv-title">7. Kontraste des brasilianischen Buchmarkts</div>
  <div class="cv-sub">Freie Universität Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Sept.–Oct. 2013</div>
  <div class="cv-title">6. ViceVersa Translation Workshop: Georg Simmel's "Brücke und Tür"</div>
  <div class="cv-sub">Literarisches Colloquium Berlin</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2006</div>
  <div class="cv-title">5. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">14th International Symposium on Undergraduate Research, USP</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2005</div>
  <div class="cv-title">4. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">13th International Symposium on Undergraduate Research, USP</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2003</div>
  <div class="cv-title">3. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">11th International Symposium on Undergraduate Research, USP</div>
</div>

<div class="cv-item">
  <div class="cv-date">Jun. 2002</div>
  <div class="cv-title">2. Amor infectum: observações sobre a lírica amorosa de Drummond</div>
  <div class="cv-sub">III Jornada Científica, Faculdades Integradas de Ribeirão Pires</div>
</div>

<div class="cv-item">
  <div class="cv-date">Nov. 2002</div>
  <div class="cv-title">1. Amor infectum: a revolta do singular na lírica de Drummond</div>
  <div class="cv-sub">10th International Symposium on Undergraduate Research, USP</div>
</div>

</details>

## Academic Self-Governance

<div class="cv-item">
  <div class="cv-date">2026</div>
  <div class="cv-title">5. Contribution to the Online Self-Assessment for Portuguese/French</div>
  <div class="cv-sub">University of Cologne, Feb.–Mar. 2026</div>
</div>

<div class="cv-item">
  <div class="cv-date">2025</div>
  <div class="cv-title">4. First Examiner, Bachelor's Thesis — Luca Basile</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne, 29.09.2025</div>
</div>

<div class="cv-item">
  <div class="cv-date">2024</div>
  <div class="cv-title">3. Contribution to Website and Social Media Strategy</div>
  <div class="cv-sub">Portuguese-Brazilian Institute, University of Cologne, Apr.–Aug. 2024</div>
</div>

<div class="cv-item">
  <div class="cv-date">since 2023</div>
  <div class="cv-title">2. Member, Project "Portugueses de Papel"</div>
  <div class="cv-sub">University of Lisbon</div>
</div>

<div class="cv-item">
  <div class="cv-date">2022</div>
  <div class="cv-title">1. Member, Master's Examination Committee — César Marins de Oliveira</div>
  <div class="cv-sub">University of São Paulo, Jun. 2022</div>
</div>

## Languages

Portuguese (first language) · German, French, Spanish (fluent, spoken and written) · English (very good command) · Latin, Italian (good command)
