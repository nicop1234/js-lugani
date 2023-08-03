function calculos(){
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const numero3 = document.getElementById("numero3").value;
    const numero4 = document.getElementById("numero4").value;

    const suma = Number.parseInt(numero1) + Number.parseInt(numero2)
    const sumaEntero = Number.parseInt(suma)
    const multiplicacion = numero3 * numero4

    document.write("suma de los 2 primeros numeros: ");
    document.write(suma);
    document.write("<br>")
    document.write("producto de los 2 ultimos numeros: ");
    document.write(multiplicacion);
}