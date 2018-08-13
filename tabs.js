const afficherTabContent = function(a) {
  // div est le composant Onglet (tabs + tabs-content)
  const div = a.parentNode.parentNode.parentNode

  // le tab-content activé actuellement est desactivé
  const tabContentActive = div.querySelector('.tab-content.active')
  tabContentActive.classList.remove('active')

  // le tab-content correspondant au a cliqué est activé
  const href = a.getAttribute('href')
  const tabContentAActiver = div.querySelector(href) 
  tabContentAActiver.classList.add('active')
}

const as = document.querySelectorAll('.tab a')
for(let i=0; i<as.length; i++) {
  let a=as[i]
  a.addEventListener('click', function(e) { afficherTabContent(this) })
}