function insertLangSwitcher(hrefDe, hrefPt, hrefEn, active) {
  var container = document.querySelector('#navbar .container');
  var toggler = document.querySelector('#navbar .navbar-toggler');
  if (!container || !toggler) return;
  var langDiv = document.createElement('div');
  langDiv.className = 'lang-switcher';
  var deClass = active === 'de' ? ' class="active"' : '';
  var ptClass = active === 'pt' ? ' class="active"' : '';
  var enClass = active === 'en' ? ' class="active"' : '';
  langDiv.innerHTML =
    '<a href="' + hrefDe + '"' + deClass + '>DE</a> · ' +
    '<a href="' + hrefPt + '"' + ptClass + '>PT</a> · ' +
    '<a href="' + hrefEn + '"' + enClass + '>EN</a>';
  container.insertBefore(langDiv, toggler);
}

function translateNav(map) {
  document.querySelectorAll('#navbar .nav-link').forEach(function (a) {
    var path = new URL(a.href).pathname;
    if (map[path]) {
      a.childNodes[0].textContent = map[path].text + ' ';
      a.href = map[path].href;
    }
  });
}

function setupAboutColumns() {
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
}

function insertCovers(covers) {
  for (var id in covers) {
    var entry = document.getElementById(id);
    if (entry) {
      var img = document.createElement('img');
      img.src = covers[id];
      img.style.cssText = 'width:90px; height:auto; border-radius:3px; box-shadow:0 1px 4px rgba(0,0,0,0.2); flex-shrink:0;';
      var wrapper = document.createElement('div');
      while (entry.firstChild) { wrapper.appendChild(entry.firstChild); }
      entry.appendChild(img);
      entry.appendChild(wrapper);
      entry.style.display = 'flex';
      entry.style.gap = '14px';
      entry.style.alignItems = 'flex-start';
    }
  }
}
