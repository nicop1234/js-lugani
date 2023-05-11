function calcularPrecio(){
    const precio = document.getElementById("precio").value;
    const cuantos = document.getElementById("cuantos").value;

    const multiplicacion = precio * cuantos

    document.write("Precio a pagar: ");
    document.write(multiplicacion);
}