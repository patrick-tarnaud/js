(function() {

  
  let chercherSeries = (nom) => {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          afficherSeries(JSON.parse(xhttp.responseText))
        }
      }
    }
    xhttp.open('GET','http://api.tvmaze.com/search/shows?q=' + nom, true)
    xhttp.send()
  }
  
  let effacer = () => {
    let ul = document.querySelector('#series')
    ul.innerHTML=''
  }

  let afficherSeries = (series)  => {
    effacer()
    let ul = document.querySelector('#series')
    for (let serie of series) {
      let li = document.createElement('li')
      li.innerHTML=serie.show.name
      ul.appendChild(li)
    }
  }

  let inputNom = document.querySelector('#nom')
  inputNom.addEventListener('input', () => chercherSeries(inputNom.value))
  let chercherButton = document.querySelector('#chercher')
  chercherButton.addEventListener('click', () => chercherSeries(inputNom.value))
})()