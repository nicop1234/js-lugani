const ejecutar = () => {
  var primeraCelda = document.getElementById("primeraCelda");

  var primeraFila = primeraCelda.parentNode;
  var nodosTextoPrimeraFila = [];

  for (var i = 0; i < primeraFila.cells.length; i++) {
    var celda = primeraFila.cells[i];
    nodosTextoPrimeraFila.push(celda.firstChild.nodeValue);
  }

  var mensaje = "Nodos de texto de la primera fila:\n\n";
  mensaje += nodosTextoPrimeraFila.join("\n");

  alert(mensaje);
};
