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
  
  let effacerTable = () => {
    for (let i = 1; i< tseries.rows.length; i++) {
      tseries.deleteRow(i)
    }
  }

  let ajouterSerieDansTable = (serie) => {
    let tr = null
    let td = null
    
    tr = document.createElement('tr')

    // id    
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.id

    // name
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.name    

    // genres
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.genres

    // status
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.status

    // premiered
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.premiered

    // officialSite
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.officialSite

    // rating
    td = document.createElement('td')
    tr.appendChild(td)
    td.innerText=serie.show.rating.average

    tseries.tBodies[0].appendChild(tr)
  }

  let afficherSeries = (series)  => {
    effacerTable()
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