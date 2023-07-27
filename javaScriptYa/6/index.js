let nota1 = parseInt(prompt('Ingrese primer nota'));
let nota2 = parseInt(prompt('Ingrese segunda nota'));
let nota3 = parseInt(prompt('Ingrese tercer nota'));
let suma = nota1 + nota2 + nota3;

let promedio = suma / 3;
if (promedio >= 7) {
    document.write('Promocionado');
}else{
    document.write("desaprobado")
}

document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');


let clave1 = prompt('clave:');
let clave2 = prompt('Repita la clave:');

if (clave1 == clave2) {
    document.write('Ingresó las dos claves iguales');
}else{
    document.write("no son iguales las claves")
}