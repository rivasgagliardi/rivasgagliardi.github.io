---
layout: cv
permalink: /cv/
title: Lebenslauf
nav: true
nav_order: 5
cv_format: rendercv
toc:
  sidebar: left
---

TESTE123

<script>
document.addEventListener('DOMContentLoaded', function () {
  var labels = {
    'Contact Information': 'Kontaktinformationen',
    'Professional Summary': 'Zusammenfassung',
    'Name': 'Name',
    'Professional Title': 'Titel',
    'Email': 'E-Mail',
    'Experience': 'Werdegang',
    'Education': 'Akademische Ausbildung',
    'Interests': 'Auslandsaufenthalte und Gastprofessuren',
    'Awards': 'Preise und Stipendien',
    'Publications': 'Drittmittelerfahrung und Gutachtertätigkeit',
    'Certificates': 'Organisation wissenschaftlicher Veranstaltungen',
    'Projects': 'Gastvorträge',
    'Skills': 'Vorträge in wissenschaftlichen Veranstaltungen',
    'References': 'Akademische Selbstverwaltung',
    'Languages': 'Sprachen'
  };
  document.querySelectorAll('.cv .card-title, .cv td b').forEach(function (el) {
    var t = el.textContent.trim();
    if (labels[t]) { el.textContent = labels[t]; }
  });
});
</script>
