---
layout: page
permalink: /en/projects/wolf/
title: Le Brésil littéraire (1863) von Ferdinand Wolf
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
    langDiv.innerHTML = '<a href="/projects/3_wolf/">DE</a> · <a href="/pt/projects/wolf/">PT</a> · <a href="/en/projects/wolf/" class="active">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

**Freie Universität Berlin, 2014–2019**

Literary history and ideology in the nineteenth century: this research project was dedicated to reconstructing the genesis of *Le Brésil littéraire: histoire de la littérature brésilienne* (1863). This first history of Brazilian literature was written in German by the Romance philologist and Imperial and Royal Court Library official Ferdinand Wolf (Vienna, 1796–1866), but was published only in French translation. At the center of the research is a philological comparison of the never-printed German manuscript "Geschichte der brasilianischen Nationalliteratur" with the published French version.

The comparison reveals the differences between the two versions and between the paradigms underlying them: in the German text, Wolf's literary-political project regarding the supremacy of the "German spirit" and the Habsburg monarchy can be clearly identified, whereas this is decisively softened in the French text. The conscious suppression of certain terms and the introduction of vocabulary drawn from an emancipatory tradition of thought stemming from the French Revolution undermine, in the published book, the coherence of Wolf's conception of history, which operates with the language and thought of German Idealism.

Furthermore, Wolf's correspondence with Brazilian scholars in the service of Emperor Pedro II reveals how they helped shape the genesis of the work. Pedro II's main interest was to implement a cultural-political agenda aimed at preserving the monarchy and the unity of the country. Above all, this involved narrating the past — particularly the colonial past — from a particular perspective. *Le Brésil littéraire* thus emerged under the sign of the ideological demands of a transnational elite: (literary) historiography is here employed as a valuable tool for constructing a past and disseminating it as the sole truth. The analysis of the discursive inversion of actual relations shows, however, how such devices can serve to justify and consolidate one's own position of dominance. Finally, the archival and material-historical approach makes it possible to make available a collection of previously unpublished materials and their transcriptions.

**Supervisors:** Prof. Dr. Susanne Zepp-Zwirner; Prof. Dr. Joachim Küpper

**Field:** Romance Philology

**Funding:** [Friedrich Schlegel Graduate School of Literary Studies](https://www.geisteswissenschaften.fu-berlin.de/friedrichschlegel/personen/Alumni-Dok/Gagliardi/index.html)

**Publications**

- [Literaturgeschichte und Ideologie: Ferdinand Wolfs literaturpolitisches Projekt «Le Brésil littéraire»](/en/publications/#gagliardi2020literaturgeschichte)
- [Transnationally Forged Nationality](/en/publications/#gagliardi2020transnationally)

**Course taught**

- Summer semester 2020, advanced seminar: História literária e ideologia no século XIX (University of São Paulo)
