///// comparar listas /////

// 1.  .every() : si todos los componente de la lista, cumplen una condicion 

const array = [4, 6, 7, 8, 3, 1, 0, 500, -34, -2, 12, -100]

/*
const resultado = array.every(valor => {
    if (typeof valor === "number") {
        return true
    } else {
        return false
    }
})
*/

// mas sencillo y como se debe utilizar

const resultado = array.every(valor => valor > 0) 

console.log(resultado)

// 2. comparacion de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

// console.log(ar1 === ar2) - las listas no se pueden comparar asi 

const compararArray = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i)=> valor === array_2[i])
    return res
}

console.log(compararArray(ar1, ar2))

const ar3 = [1, 2, 3, 5]

console.log(compararArray(ar1, ar3))