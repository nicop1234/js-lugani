function validacion (){
    const entero = document.getElementById("enter").value;

    if(entero >= 1 ){
        document.write("es positivo")
    }

    else if(entero == 0){
        document.write("es 0")
    }

    else{
        document.write("es negativo")
    }
}