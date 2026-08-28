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

I am a scholar of Romance literatures and work on writing in French, Spanish and Portuguese from the sixteenth to the nineteenth century. My interests centre on women's authorship, on narrative theory, and on a social history of literary form. I am currently a visiting researcher at the Portuguese-Brazilian Institute of the University of Cologne, where I am writing my Habilitation.

My Habilitation project carries the working title Licentia. Women's Speech and Critical Knowledge in Marguerite de Navarre and María de Zayas. It concerns the two great novella collections that the Romance early modern period has handed down under a woman's name, and above all the spaces they set up for women to speak and to judge: the cadre of the Heptaméron, Zayas's sarao. The title term has a double history: in the rhetorical tradition, licentia names the freedom to speak before those one must revere or fear; in early modern daily life, licencia is the permission a woman in a subordinate position has to obtain. My question lies between these two meanings: who may take the floor, before whom, and with what claim to truth? What becomes of such spaces when the nineteenth-century novel occupies them anew — the salon, the tertulia — I pursue in my teaching and in essays on women characters in the French and Spanish novel.

From 2021 to 2024 I directed a DFG-funded research project at the University of Cologne in a position of my own (Eigene Stelle), devoted to the critical method of Mário de Andrade, Antonio Candido and Roberto Schwarz: to the question, that is, of how a criticism arose in Brazil that reads literary form as social process. The project produced the German edition of Roberto Schwarz's *Ein Meister an der Peripherie des Kapitalismus*, which I edited, and the volume *Roberto Schwarz Beyond Borders*, which I co-edited.

Out of that work in turn grew my engagement with Anatol Rosenfeld, whose thought changed radically in exile and whom I am rereading from a comparatist perspective. In the course of it I came upon the Mainz sociologist Irmgard Lang, a scholar whom research had passed over entirely, and whose career and work I was able to reconstruct for the first time in the Mainz University Archive and the Federal Archive in Koblenz — from her Brazilian field diaries to her correspondence with Rosenfeld.

My doctorate belonged to another field, the writing of literary history in the nineteenth century. It examines the literary-political project of the Viennese Romance scholar Ferdinand Wolf, who in 1863 wrote the first history of Brazilian literature in *Le Brésil littéraire*: in Vienna, in French, for a European public. How a foreign literature is thereby ordered, selected and naturalized into the European canon — and what falls by the wayside — is the question of that book.

I studied in São Paulo and in Berlin: Portuguese and French philology at the University of São Paulo, then Applied Literary Studies and a doctorate (2019) at the Freie Universität Berlin. As a postdoctoral researcher I worked at the Institute of Latin American Studies in London and at the University of São Paulo, before moving to Cologne in 2021.
