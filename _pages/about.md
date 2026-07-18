---
layout: about
title: Über mich
permalink: /
subtitle: "Literaturwissenschaftlerin, Romanistin"
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
selected_papers: true
social: true # includes social icons at the bottom of the page
announcements:
  enabled: true
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
h2:has(> a[href="/publications/"]) {
  font-size: 0;
  margin-top: 3.5rem;
}
h2:has(> a[href="/publications/"])::before {
  content: "Neueste Publikationen";
  font-size: 1.5rem;
}
h2:has(> a[href="/news/"]) {
  font-size: 0;
}
h2:has(> a[href="/news/"])::before {
  content: "Aktuelles";
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
.clearfix p {
  font-size: 1.0625rem;
}
.news-title {
  pointer-events: none;
  color: inherit;
  text-decoration: none;
  cursor: default;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var monthMap = {Jan:'Januar', Feb:'Februar', Mar:'März', Apr:'April', May:'Mai', Jun:'Juni', Jul:'Juli', Aug:'August', Sep:'September', Oct:'Oktober', Nov:'November', Dec:'Dezember'};
  document.querySelectorAll('.news th').forEach(function (th) {
    var m = th.textContent.trim().match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})$/);
    if (m && monthMap[m[1]]) {
      th.textContent = m[2] + '. ' + monthMap[m[1]] + ' ' + m[3];
    }
  });
});
</script>

Laura Rivas Gagliardi ist wissenschaftliche Mitarbeiterin am [Portugiesisch-Brasilianischen Institut der Universität zu Köln](https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi).

Nach dem Studium der Portugiesischen und Französischen Philologie an der Universität von São Paulo (2007) und dem Master in Angewandter Literaturwissenschaft an der Freien Universität Berlin (2013) wurde sie dort 2019 – als Stipendiatin der Friedrich Schlegel Graduate School of Literary Studies – promoviert. Als Postdoktorandin forschte sie am Institute of Latin American Studies in London sowie am Departamento de Letras Modernas der Universität von São Paulo, bevor sie 2021 nach Köln wechselte, wo sie bis 2024 ein [DFG-gefördertes Forschungsprojekt](https://gepris.dfg.de/gepris/projekt/459579268) zur kritischen Methode von Mário de Andrade, Antonio Candido und Roberto Schwarz leitete.

Ihre gegenwärtige Forschung verfolgt zwei Linien: Im Rahmen ihrer Habilitation untersucht sie die literarische Konstruktion weiblicher Handlungsmacht im europäischen und lateinamerikanischen Roman des 19. Jahrhunderts; parallel dazu widmet sie sich Leben und Werk des Literaturwissenschaftlers Anatol Rosenfeld, dessen aus dem Exil hervorgegangenes Denken sie aus komparatistischer Perspektive neu erschließt.
