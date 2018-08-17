(function() {

  /**
   * Recherche des séries par l'API TV Maze
   * @param {*} nom 
   */
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
    for (let i = 0; i< tseries.rows.length; i++) {
      tseries.deleteRow(0)
    }
  }

  let ajouterSerieDansTable = (serie) => {
    let tr = null
    let td = null
    
    tr = document.createElement('tr')
    
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.id

    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.name    

    tseries.tBodies[0].appendChild(tr)
  }

  let afficherSeries = (series)  => {
    effacer()
    let ul = document.querySelector('#series')


    for (let serie of series) {
      ajouterSerieDansTable(serie)
    }
  }

  let tseries = document.querySelector('.tseries')
  let inputNom = document.querySelector('#nom')
  inputNom.addEventListener('input', () => chercherSeries(inputNom.value))
  let chercherBtn = document.querySelector('#chercherBtn')
  chercherBtn.addEventListener('click', () => chercherSeries(inputNom.value))
})()