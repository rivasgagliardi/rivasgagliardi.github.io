---
layout: page
permalink: /publications/
title: Publikationen
description: 
nav: true
nav_order: 2
---
<style>
  .publications h2.bibliography {
    color: var(--global-text-color);
    text-align: left;
    border-top: none;
    padding-top: 0;
    margin-top: 2.5rem;
  }
  
  #schwarz2023meister .links::after,
  #gagliardi2026tropischer .links::after,
  #gagliardi2025apropriacoes .links::after,
  #gagliardi2024kolonialgeschichte .links::after,
  #gagliardi2023antropofagia .links::after,
  #gagliardi2023einfuehrung .links::after,
  #gagliardi2022aspectos .links::after,
  #gagliardi2022historia .links::after,
  #gagliardi2021invisibilidad .links::after {
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
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.links a').forEach(function(a) {
    if (a.textContent.trim() === 'Website') {
      a.textContent = 'Webseite';
    }
  });

  var covers = {
    'gagliardi2020literaturgeschichte': '/assets/img/cover_wolf.jpg',
    'schwarz2023meister': '/assets/img/cover_ein_meister.jpg',
    'gagliardi2026beyond': '/assets/img/cover_beyond.jpg'
  };
  for (var id in covers) {
    var entry = document.getElementById(id);
    if (entry) {
      var img = document.createElement('img');
      img.src = covers[id];
      img.style.cssText = 'width:90px; height:auto; border-radius:3px; box-shadow:0 1px 4px rgba(0,0,0,0.2); flex-shrink:0;';
      var wrapper = document.createElement('div');
      while (entry.firstChild) {
        wrapper.appendChild(entry.firstChild);
      }
      entry.appendChild(img);
      entry.appendChild(wrapper);
      entry.style.display = 'flex';
      entry.style.gap = '14px';
      entry.style.alignItems = 'flex-start';
    }
  }

  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (container && toggler) {
    var langDiv = document.createElement('div');
    langDiv.className = 'lang-switcher';
    langDiv.innerHTML = '<a href="/publications/" class="active">DE</a> · <a href="/pt/publications/">PT</a> · <a href="/en/publications/">EN</a>';
    container.insertBefore(langDiv, toggler);
  }
});
</script>

<!-- _pages/publications.md -->
<!-- Bibsearch Feature -->
{% include bib_search.liquid %}
<div class="publications">
{% bibliography %}
</div>
