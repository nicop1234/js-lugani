const datosPer =
    {
        nombre:"Nico",
        apellido:"Pereyra",
        edad:16,
        altura:168,
        eresDesarrollador:true
    }

const datosAmigo =  {
    nombre:"Nico2",
    apellido:"Pereyra2",
    edad:16,
    altura:168,
    eresDesarrollador:true
}

const nombre = datosPer.nombre
console.log(nombre)

const lista = [datosPer.nombre, datosPer.apellido, datosPer.edad, datosPer.altura, datosPer.eresDesarrollador]
console.log(lista)

const lista2 = [...[datosPer], ...[datosAmigo]]
console.log(lista2)
