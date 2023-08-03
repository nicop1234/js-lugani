const lista = ["papa", "vinagre", "sal", "huevo", "mayonesa"] 
const peliculas = [
    {
        nombre:"Eterno resplandor de una mente sin recuerdos",
        director:"Michel Gondry",
        fecha:2004
    },
    {
        nombre:"El lobo de Wall Street",
        director:"Martin Scorsese",
        fecha:2013
    },
    {
        nombre:"El secreto de sus ojos",
        director:"Juan José Campanella",
        fecha:2009
    }
] 
const soloDire = []
const titulos = []


console.log("lista: " + lista)
lista.push("aceite")
console.log("lista modificada: " + lista)
console.log(peliculas)

const objFilt = peliculas.filter(obj => obj.fecha > 2010)
console.log("peliculas despues del 2010: ")
console.log(objFilt)


const soloDirec = peliculas.map((item)=>(
    soloDire.push(item.director)     
))
console.log(soloDire)

const soloTitu = peliculas.map((item)=>(
    titulos.push(item.nombre)     
))
console.log(titulos)

console.log(soloDire.concat(titulos))

console.log([...soloDire, ...titulos])

