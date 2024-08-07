// bucles for 

/*
for (inicializacion; condiciones; actualizacion) {
    // esto es el bucle
} 
*/

/*
i + 1
i += 1
i++
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let lista = [1, 2, 3, 4, 5, 6, 7, 10, 12, 800]
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

// for... of 
for (let valor of lista) {
    console.log(valor)
}


// estructura  for... each - funcion fecha
lista.forEach(valor => {
    console.log(valor)
})


// for.. in

let persona = {
    nombre: "licet",
    apellido: "lemus",
    edad: 28,
    isDeveloper: true,
}

console.log(persona.nombre)

let prop = "edad"
console.log(persona[prop])


for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}
