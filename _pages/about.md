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
  margin-top: 2.5rem;
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
.about-columns {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}
.about-columns .clearfix {
  flex: 1;
  margin-bottom: 0;
}
.about-columns .profile {
  .about-columns .profile {
  width: 300px;
  flex-shrink: 0;
  float: none !important;
  position: sticky;
  top: 90px;
}
.about-columns .social {
  margin-top: 1.5rem;
}
@media (max-width: 650px) {
  .about-columns {
    flex-direction: column;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/" class="active">DE</a> · <a href="/pt/">PT</a> · <a href="/en/">EN</a>';
    container.insertBefore(langDiv, toggler);
    }
  var profileDiv = document.querySelector('.profile');
  var bioDiv = document.querySelector('.clearfix');
  if (profileDiv && bioDiv) {
    var wrapper = document.createElement('div');
    wrapper.className = 'about-columns';
    bioDiv.parentNode.insertBefore(wrapper, bioDiv);
    wrapper.appendChild(bioDiv);
    wrapper.appendChild(profileDiv);
  }
  var socialDiv = document.querySelector('.social');
  if (socialDiv && profileDiv) {
    profileDiv.appendChild(socialDiv);
  }
});
</script>

Ich bin wissenschaftliche Mitarbeiterin am [Portugiesisch-Brasilianischen Institut der Universität zu Köln](https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi).

Nach dem Studium der Portugiesischen und Französischen Philologie an der Universität von São Paulo (2007) und dem Master in Angewandter Literaturwissenschaft an der Freien Universität Berlin (2013) wurde ich dort 2019, als Stipendiatin der Friedrich Schlegel Graduate School of Literary Studies, promoviert. Als Postdoktorandin forschte ich am Institute of Latin American Studies in London sowie am Departamento de Letras Modernas der Universität von São Paulo, bevor ich 2021 nach Köln wechselte, wo ich bis 2024 ein [DFG-gefördertes Forschungsprojekt](https://gepris.dfg.de/gepris/projekt/459579268) zur kritischen Methode von Mário de Andrade, Antonio Candido und Roberto Schwarz leitete.

Meine gegenwärtige Forschung verfolgt zwei Linien: Im Rahmen meiner Habilitation untersuche ich, ausgehend von der kritischen Literatur- und Gesellschaftsanalyse Antonio Candidos und Roberto Schwarz', wie und warum weibliche Figuren im französischen Roman des 19. Jahrhunderts sowie in dessen spanischer und brasilianischer Aneignung zu Kristallisationspunkten literarischer Gesellschaftskritik werden. Im Zentrum steht dabei die formale Struktur der Romane als Ausdruck des Spannungsverhältnisses zwischen dem französischen Modell und den je spezifischen gesellschaftlichen Realitäten, in die es übersetzt wird. Parallel dazu widme ich mich Leben und Werk des Literaturwissenschaftlers Anatol Rosenfeld, dessen aus dem Exil hervorgegangenes Denken ich aus komparatistischer Perspektive neu erschließe.
