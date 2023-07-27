let num1 = parseInt(prompt('Ingrese el primer número:'));
let num2 = parseInt(prompt('Ingrese el segundo número:'));
if (num1 > num2) {
    let suma = num1 + num2;
    let diferencia = num1 - num2;
    document.write('La suma es:' + suma);
    document.write('<br>');
    document.write('La diferencia es:' + diferencia);
} else {
    let producto = num1 * num2;
    let division = num1 / num2;
    document.write('El producto es ' + producto);
    document.write('<br>');
    document.write('La división del primero respecto al segundo es:' + division);
}



document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');


let nota1 = parseInt(prompt('Ingrese primer nota'));
let nota2 = parseInt(prompt('Ingrese segunda nota'));
let nota3 = parseInt(prompt('Ingrese tercer nota'));
let suma = nota1 + nota2 + nota3;

let promedio = suma / 3;
if (promedio >= 4) {
    document.write('Regular');
}else{
    document.write("Reeprobado")
}


document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');


let num = parseInt(prompt('Ingrese un valor entre 1 y 99:'));

if (num < 10) {
    document.write('El valor ingresado tiene un dígito');
} else {
    document.write('El valor ingresado tiene dos dígitos');
}