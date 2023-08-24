const mostrarContenido = () => {
  var miDiv = document.getElementById("miDiv");
  var ultimoHijo = miDiv.lastElementChild;
  var parrafoActual = ultimoHijo;
  
  while (parrafoActual !== null) {
    var contenidoParrafo = parrafoActual.textContent;
    alert(contenidoParrafo); 
    parrafoActual = parrafoActual.previousElementSibling;
  }
}

