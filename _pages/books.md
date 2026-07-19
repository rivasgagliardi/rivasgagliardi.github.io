---
layout: page
permalink: /books/
title: Bücher
nav: true
nav_order: 2
---

<style>
article {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.cover img {
  height: 320px !important;
  width: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/books/" class="active">DE</a> · <a href="/pt/books/">PT</a> · <a href="/en/books/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

<figure class="cover">
  <a href="/publications/#gagliardi2020literaturgeschichte">
    <img alt="Literaturgeschichte und Ideologie cover" src="/assets/img/cover_wolf.jpg">
  </a>
</figure>
<figure class="cover">
  <a href="/publications/#schwarz2023meister">
    <img alt="Ein Meister an der Peripherie des Kapitalismus cover" src="/assets/img/cover_ein_meister.jpg">
  </a>
</figure>
<figure class="cover">
  <a href="/publications/#gagliardi2026beyond">
    <img alt="Roberto Schwarz Beyond Borders cover" src="/assets/img/cover_beyond.jpg">
  </a>
</figure>
