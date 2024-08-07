///// conjuntos - sets: conjunto no ordenados de valores unicos - no valores repetidos/////

const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, "Hola", { id: 5}, { id: 5}]

const miSet = new Set(array)
console.log(array)
console.log(miSet)

// añadir .add o eliminar .delete valores 

miSet.add(50)
console.log(miSet)

miSet.delete("Hola")
console.log(miSet)

// eliminar todo los elementos .clear
// miSet.clear()
// console.log(miSet)

// como saber que contiene un valor .has()
console.log(miSet.has(3))

// tamaño del set por la propiedad size

console.log(miSet.size)

// iteracion dentro de los valores
miSet.forEach(valor => {
    console.log(valor)
})

// obtener los valores del set
// objeto iterator 
const it_miSet = miSet.values()
console.log(it_miSet)

// volver a convertir el set en un array 

const ar_miSet = [...miSet]
console.log(ar_miSet)