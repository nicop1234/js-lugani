function calculos2(){
    const numero1 = document.getElementById("numero1Ej5").value;
    const numero2 = document.getElementById("numero2Ej5").value;
    const numero3 = document.getElementById("numero3Ej5").value;
    const numero4 = document.getElementById("numero4Ej5").value;

    const suma = Number.parseInt(numero1) + Number.parseInt(numero2) + Number.parseInt(numero3) + Number.parseInt(numero4)
    const multiplicacion = numero3 * numero4 * numero2 * numero1

    document.write("suma total: ");
    document.write(suma);
    document.write("<br>")
    document.write("producto total: ");
    document.write(multiplicacion);
}