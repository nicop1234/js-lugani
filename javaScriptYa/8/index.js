let num1 = parseInt(prompt('Ingrese primer valor:'));
let num2 = parseInt(prompt('Ingrese segundo valor:'));
let num3 = parseInt(prompt('Ingrese tercer valor:'));
if (num1 > num2) {
    if (num1 > num3) {
        document.write('El mayor de los tres es:' + num1);
    } else {
        document.write('El mayor de los tres es:' + num3);
    }
} else {
    if (num2 > num3) {
        document.write('El mayor de los tres es:' + num2);
    } else {
        document.write('El mayor de los tres es:' + num3);
    }
}

document.write('<br>');


if (num1 == 0) {
    document.write('El prmier número ingresado es cero');
} else {
    if (num1 > 0) {
        document.write('El prmier número ingresado es positivo');
    } else {
        document.write('El prmier número ingresado es negativo');
    }
}



document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');

let num = parseInt(prompt('Ingrese un número de 1,2 o 3 dígitos'));
if (num < 10) {
    document.write('Tiene un dígito');
} else {
    if (num < 100) {
        document.write('Tiene dos dígitos');
    } else {
        document.write('Tiene tres dígitos');
    }
}


document.write('<br>');
document.write('--------------------------------------------');
document.write('<br>');


let nombre = prompt('Ingrese el nombre del postulante');
let cantpreguntas = parseInt(prompt('Cantidad de preguntas del test'));
let cantcorrectas = parseInt(prompt('Cantidad de preguntas correctas'));
let porcentaje = cantcorrectas / cantpreguntas * 100;
if (porcentaje >= 90) {
    document.write('Nivel superior');
} else {
    if (porcentaje >= 75) {
        document.write('Nivel medio');
    } else {
        if (porcentaje >= 50) {
            document.write('Nivel regular');
        } else {
            document.write('Fuera de nivel');
        }
    }
}