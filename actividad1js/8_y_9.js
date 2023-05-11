function promedio(){
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;


    const promedio = (Number.parseInt(nota1) + Number.parseInt(nota2) + Number.parseInt(nota3))/3

    if (promedio >= 7){
        document.write("promedio: ");
        document.write(promedio);
        document.write("<br>")
        document.write("<h4>promovido</h4>")
    }else{
        document.write("promedio: ");
        document.write(promedio);
        document.write("<br>")
        document.write("<h4>no promovido</h4>")
    }
}

function promedio2(){
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;


    const promedio = (Number.parseInt(nota1) + Number.parseInt(nota2) + Number.parseInt(nota3))/3

    if (promedio >= 4){
        document.write("promedio: ");
        document.write(promedio);
        document.write("<br>")
        document.write("<h4>regular</h4>")
    }else{
        document.write("promedio: ");
        document.write(promedio);
        document.write("<br>")
        document.write("<h4>reprobado</h4>")
    }

}