//// Ordenar arrays ////
// 1. Metodo .sort() : modifica el array original

const array = [2, 5, 9, 15,1, 2, 0, 4]

console.log(array)

// array.sort((a, b) => { - a elemento anterior, b, siguiente elemento})

array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {
        return 0
    }
})

console.log(array)

// ordenas unicamente array numericos

const arrayNumerico = [4, 1, 3, 6, 4, 8, 10, 456]
// a-b menor a mayor
// b-a mayor a menor
// 
arrayNumerico.sort((a, b) => b - a )
console.log(arrayNumerico)

///////////////////////
// interesante en array de objetos 

const listaObjetos = [
    {nombre: "Licet", edad: 25},
    {nombre: "Maria", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Carlo", edad: 39}
]

listaObjetos.sort((a, b) => a.edad - b.edad )
console.log(listaObjetos)
