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

I work comparatively on writing in French, Spanish and Portuguese from the sixteenth to the nineteenth century. In research and teaching I work on women's authorship, on narrative theory, and on realism in Brazil, France and Spain, always from the perspective of a social history of literary forms. My interests extend to the writing of literary history in the nineteenth century and to literary criticism in the twentieth. In my archival work on multilingual estates I trace the transfer of knowledge between the German-speaking and the Romance worlds. I am currently a visiting researcher at the Portuguese-Brazilian Institute of the University of Cologne (https://pbi.phil-fak.uni-koeln.de/personen/wissenschaftliche-mitarbeiterinnen/laura-rivas-gagliardi), where I am preparing my Habilitation.

My Habilitation project carries the working title *Licentia. Women's Speech and Critical Knowledge in Marguerite de Navarre and María de Zayas*. In it I study the great novella collections of the early modern Romance world written by women. I pay particular attention to the spaces in which women narrate and judge: the *cadre* of the *Heptaméron* and Zayas's *sarao*. The title term has a double history: in the rhetorical tradition, *licentia* names the freedom to speak before those one must revere or fear; in early modern daily life, *licencia* is the permission that subordinates of every kind had to obtain — and a woman was almost always somebody’s subordinate. My question lies between these two meanings: who may take the floor, before whom, and with what claim to truth? What becomes of such spaces when the nineteenth-century novel occupies them anew, now as salon or *tertulia*, has been the subject of my courses and of essays on women characters.

From 2021 to 2024 I directed a DFG-funded research project at the University of Cologne on my own position (*Eigene Stelle*), devoted to the critical method of Mário de Andrade, Antonio Candido and Roberto Schwarz. What interested me was how a criticism arose in Brazil that reads literary form as social process. The project produced the German edition of Roberto Schwarz's *Ein Meister an der Peripherie des Kapitalismus*, which I edited, and the volume *Roberto Schwarz Beyond Borders*, which I co-edited.

Out of that work in turn grew my engagement with the literary critic Anatol Rosenfeld, whose thought changed radically in exile and whom I reread from a comparatist perspective, drawing on his archives in São Paulo, at the Casa do Povo, and in Germany. Along the way I discovered a colleague of Rosenfeld's, the German sociologist Irmgard Lang, a scholar of Brazilian subjects until then entirely overlooked by the bibliography, whose career and work I was able to reconstruct for the first time in the Mainz University Archive and the Federal Archive in Koblenz.

My doctorate belongs to the field of nineteenth-century literary historiography. It examines the literary-political project of the Viennese Romance scholar Ferdinand Wolf, who in 1863 wrote the first history of Brazilian literature in *Le Brésil littéraire*: in Vienna, in French, for a European public. How Brazilian literature was incorporated, in the sphere of cultural life, into the Habsburg project of colonial expansion is the central question of that book.

I studied in São Paulo and in Berlin: Portuguese and French philology at the University of São Paulo, then Applied Literary Studies and a doctorate (2019) at the Freie Universität Berlin. As a postdoctoral researcher I worked at the Institute of Latin American Studies in London and at the University of São Paulo, before moving to Cologne in 2021.
