let nombre = "Nicolas";
let apellidos = "Pereyra";
let cantidadLetras = 0;
let arrayDeLetras = [];
let nombreApellidos = "";
let primerCaracterNombre = "";
let primerCaracterApellido = "";
let sinEspacios = "";
arrayDeNombreYApellidos = [];

console.log(nombre);
console.log(apellidos);
console.log("Estudiante: " + nombre + " " + apellidos);
console.log(
  "EstudianteMayus: " + nombre.toUpperCase() + " " + apellidos.toUpperCase()
);
console.log(
  "EstudianteMinus: " + nombre.toLowerCase() + " " + apellidos.toLowerCase()
);

nombreApellidos = nombre + " " + apellidos;
arrayDeLetras = nombreApellidos.split("");
console.log(arrayDeLetras);
cantidadLetras = arrayDeLetras.length;
console.log("cantidad de leras: " + cantidadLetras);

primerCaracterNombre = nombre.charAt(0);

primerCaracterApellido = apellidos.charAt(0);

console.log("primera letra de nombre: " + primerCaracterNombre);
console.log("primera letra de apellido: " + primerCaracterApellido);

sinEspacios = nombreApellidos.replace(/\s+/g, "");
console.log("Nomre y apellido sin espacios: " + sinEspacios)

arrayDeNombreYApellidos = nombreApellidos.split(" ");
console.log(arrayDeNombreYApellidos.includes( nombre ))

