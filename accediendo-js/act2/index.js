function cantidadHijos() {
  let lista = document.getElementById("bloque");
  alert("La cantidad de hijos del nodo div es:" + lista.childNodes.length);
  let cadena = "";
  for (let x = 0; x < lista.childNodes.length; x++) {
    if (lista.childNodes[x].nodeType == Node.TEXT_NODE)
      cadena = cadena + "Nodo tipo Texto\n";
    if (lista.childNodes[x].nodeType == Node.ELEMENT_NODE)
      cadena = cadena + "Nodo tipo Elemento\n";
  }
  alert(cadena);

  let lista2 = document.getElementById("bloque2");
  alert("La cantidad de hijos del nodo div es:" + lista2.childNodes.length);
  let cadena2 = "";
  for (let x = 0; x < lista2.childNodes.length; x++) {
    if (lista2.childNodes[x].nodeType == Node.TEXT_NODE)
      cadena2 = cadena2 + "Nodo tipo Texto\n";
    if (lista2.childNodes[x].nodeType == Node.ELEMENT_NODE)
      cadena2 = cadena2 + "Nodo tipo Elemento\n";
  }
  alert(cadena2);
}


function cantidadHijosElemento() {
    let lista = document.getElementById('bloque')
    alert('La cantidad de hijos de tipo elemento del div es:' + lista.children.length)

    let lista2 = document.getElementById('bloque2')
alert('La cantidad de hijos de tipo elemento del div es:' + lista2.children.length)
}
