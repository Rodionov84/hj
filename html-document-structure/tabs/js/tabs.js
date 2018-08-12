const tabs = document.getElementById('tabs');
const tabsNav = tabs.querySelector('.tabs-nav');
const tabsList = tabs.querySelectorAll('.tabs-content [data-tab-title][data-tab-icon]');

const tabsNavPrototype = tabsNav.firstElementChild.cloneNode(true);
tabsNav.removeChild(tabsNav.firstElementChild);

for (let tab of tabsList) {
  tab.classList.add('hidden');

  const tabNav = tabsNavPrototype.cloneNode(true);
  tabNav.addEventListener('click', setTab);
  const tabNavA = tabNav.firstElementChild;
  tabNavA.classList.add(tab.getAttribute('data-tab-icon'));
  tabNavA.innerHTML = tab.getAttribute('data-tab-title');

  tabsNav.appendChild( tabNav );
}
tabsNav.firstElementChild.click();

function setTab(event) {
  event.preventDefault();

  for (let tab of tabsNav.children) {
  	tab.classList.remove('ui-tabs-active');
  }
  this.classList.add('ui-tabs-active');

  for (let tab of tabsList) {
  	tab.classList.add('hidden');
  }

  const tabTitle = this.firstElementChild.innerHTML;
  const selectTab = tabs.querySelector('.tabs-content [data-tab-title=' + tabTitle + ']');
  selectTab.classList.remove('hidden');
}