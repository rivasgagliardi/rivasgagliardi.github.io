---
layout: about
title: About
permalink: /en/
subtitle: "Romance Studies and Literary Theory"
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
  content: "Recent Publications";
  font-size: 1.5rem;
}
h2:has(> a[href="/news/"]) {
  font-size: 0;
}
h2:has(> a[href="/news/"])::before {
  content: "News";
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
  insertLangSwitcher('/', '/pt/', '/en/', 'en');

  var map = {
    '/': { text: 'About', href: '/en/' },
    '/books/': { text: 'Books', href: '/en/books/' },
    '/publications/': { text: 'Publications', href: '/en/publications/' },
    '/projects/': { text: 'Research Projects', href: '/en/projects/' },
    '/cv/': { text: 'CV', href: '/en/cv/' },
    '/teaching/': { text: 'Teaching', href: '/en/teaching/' }
  };
  translateNav(map);

  var pubSection = document.querySelector('.publications');
  if (pubSection) {
    var pubWalker = document.createTreeWalker(pubSection, NodeFilter.SHOW_TEXT);
    var pubNode;
    while (pubNode = pubWalker.nextNode()) {
      var t = pubNode.nodeValue;
      if (t.indexOf('Hg. gemeinsam mit') !== -1) {
        pubNode.nodeValue = t.replace('Hg. gemeinsam mit', 'Co-edited with').replace(' und ', ' and ');
      }
    }
  }
});
</script>

I am a scholar of Romance literatures, working on French, Spanish and Portuguese-language literature from the sixteenth to the nineteenth century, with a focus on women's authorship, the theory of narrative and the social history of literary forms. I am currently a research associate at the [Portuguese-Brazilian Institute of the University of Cologne](https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi).

My Habilitation project bears the working title *Licentia. Female Speech and Critical Knowledge in Marguerite de Navarre and María de Zayas*. It examines how the two great novella collections that the Romance early modern period handed down under a woman author's name shape storytelling into a space of female speech and judgement. The word in the title has a double history: in the rhetorical tradition, *licentia* names the freedom to speak before those one must revere or fear. In early modern everyday life, *licencia* was the permission a subordinate had to obtain. Following the history of this word, I ask who may take the floor, before whom, and with what claim to knowledge. The project also traces what becomes of the spaces of women's speech, the salon and the *tertulia*, when the nineteenth-century novel occupies them anew. My teaching and articles on female characters in the French and Spanish nineteenth-century novel pursue the same question.

A second line of research grew out of the DFG project I led at the University of Cologne from 2021 to 2024 ([own-position grant](https://gepris.dfg.de/gepris/projekt/459579268)): the study of the critical method of Mário de Andrade, Antonio Candido and Roberto Schwarz — from which, among other publications, the co-edited volume *Roberto Schwarz Beyond Borders* (2026) emerged — led me to the life and work of the literary scholar Anatol Rosenfeld, whose thinking, radically transformed in exile, I have since been rereading from a comparative perspective. Most recently: the recovery of the unpublished correspondence between Rosenfeld and the Mainz sociologist Irmgard Lang (1926–1957), together with Lang's field diaries from Brazil (University Archive Mainz; German Federal Archives, Koblenz); an article is in preparation.

I was trained in three Romance philologies and two countries: after studying Portuguese and French philology at the University of São Paulo, I took my master's degree in Comparative Literature and my doctorate (2019) at Freie Universität Berlin, as a fellow of the Friedrich Schlegel Graduate School of Literary Studies. As a postdoctoral researcher I worked at the Institute of Latin American Studies in London and at the University of São Paulo, before moving to Cologne in 2021.
