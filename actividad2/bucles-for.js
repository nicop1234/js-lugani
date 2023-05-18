let acum = 1
let acum2 = 1
let acum3 = 1
let cont = 1

//bucle for
console.log("bucle for")
for (let i = 0; i < 11; i++) {
acum = acum * (i+1)
console.log(acum)
}

//bucle while
console.log("bucle while")
while (cont <= 11) {
    acum2 = acum2 * (cont+1)
    console.log(acum2)
    cont= cont + 1
    if (cont == 11) break
  }




