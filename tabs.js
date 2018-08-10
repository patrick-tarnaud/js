const afficherTabContent = function(e) {
  console.log('afficherTabContent()')
  const tabContentActive = document.querySelector('.tab-content.active')
  console.log(tabContentActive)
  tabContentActive.className='tab-content'
  
  /* const href = this.getAttribute('href')
  const tabActive = document.querySelector('href') */
}

const tabs = document.querySelectorAll('.tabs li')
for(let i=0; i<tabs.length; i++) {
  let tab=tabs[i]
  tab.addEventListener('click', function(e) { afficherTabContent(e) })

}