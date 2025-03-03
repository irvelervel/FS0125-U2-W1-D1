const start = function () {
  const span = document.getElementById('year')
  span.innerText = new Date().getFullYear() // getFullYear è un METODO dell'oggetto data
  // un po' come se fosse una funzione!
}
start()
