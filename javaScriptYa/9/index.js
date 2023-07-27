const punto1 = () => {
    let dia = parseInt(prompt('Ingrese día'));
    let mes = parseInt(prompt('Ingrese mes'));
    let año = parseInt(prompt('Ingrese año'));
    if (dia == 25 && mes == 12) {
        document.write('La fecha ingresada corresponde a navidad');
    } else {
        document.write('La fecha ingresada no corresponde a navidad');
    }
}


const punto2 = () => {

    let num1 = parseInt(prompt('Ingrese primer valor'));
    let num2 = parseInt(prompt('Ingrese segundo valor'));
    let num3 = parseInt(prompt('Ingrese tercer valor'));
    if (num1 == num2 && num1 == num3) {
        let resu = (num1 + num2) * num3;
        document.write('La suma de los dos primeros valores y multiplicado dicha suma por el tercero es:' + resu);
    } else {
        document.write('los numeros fueron diferentes entre si');

    }
}

const punto3 = () => {
    let num1 = parseInt(prompt('Ingrese primer valor'));
    let num2 = parseInt(prompt('Ingrese segundo valor'));
    let num3 = parseInt(prompt('Ingrese tercer valor'));
    if (num1 < 10 && num2 < 10 && num3 < 10) {
        document.write('Todos los números ingresados son menores a 10.');
    } else {
        document.write('no todos los numeros son menores a 10')
    }
}

const punto4 = () => {

    let x = parseInt(prompt('Ingrese coordenada x: '));
    let y = parseInt(prompt('Ingrese coordenada y: '));
    if (x > 0 && y > 0) {
        document.write('Se encuentra en el primer cuadrante');
    } else {
        if (x < 0 && y > 0) {
            document.write('Se encuentra en el segundo cuadrante');
        } else {
            if (x < 0 && y < 0) {
                document.write('Se encuentra en el tercer cuadrante');
            } else {
                if (x > 0 && y < 0) {
                    document.write('Se encuentra en el cuarto cuadrante');
                } else {
                    document.write('Se encuentra sobre un eje');
                }
            }
        }
    }
}


const punto5 = () => {

    let sueldo = parseFloat(prompt('Ingrese el sueldo del empleado'));
    let antiguedad = parseInt(prompt('Ingrese la antigüedad del empleado'));
    if (sueldo < 500 && antiguedad >= 10) {
        document.write('Se le otorga un aumento del 20%');
        document.write('<br>');
        let sueldototal = sueldo + sueldo * 0.20;
        document.write('El sueldo total es:' + sueldototal);
    } else {
        if (sueldo < 500 && antiguedad < 10) {
            document.write('Se le otorga un aumento del 5%');
            document.write('<br>');
            let sueldototal = sueldo + sueldo * 0.05;
            document.write('El sueldo total es:' + sueldototal);
        } else {
            document.write('El sueldo queda sin cambios:' + sueldo);
        }
    }
}