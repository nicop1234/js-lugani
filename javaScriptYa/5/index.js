let lado = prompt('lado del cuadrado: ');
let sumaCuadrado = 0

sumaCuadrado = lado * 4

document.write("perimetro del cuadrado es: " + sumaCuadrado)
document.write('<br>');

document.write('--------------------------------------------');
document.write('<br>');

let num1 = prompt('num1: ');
let num2 = prompt('num2: ');
let num3 = prompt('num3: ');
let num4 = prompt('num4: ');
let suma = 0
let product = 0
suma = parseInt(num1) + parseInt(num2)
product = parseInt(num3) * parseInt(num4)
document.write("suma de num1 y num2: " + suma)
document.write('<br>');
document.write("produto de num3 y num4: " + product)

document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');


let sumaTotal = suma + parseInt(num3) + parseInt(num4)
let productTotal = product * parseInt(num1) * parseInt(num2)
document.write("suma total: " + sumaTotal)
document.write('<br>');
document.write("produto total: " + productTotal)


document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');



let precio = prompt('precio del artículo');
let cantidad = prompt('cantidad de artículos a llevar:');
let importe = parseInt(precio) * parseInt(cantidad);

document.write('Debe abonar: ' + importe);
