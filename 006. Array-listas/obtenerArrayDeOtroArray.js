//// lista a partir de otra .slice() porcion - no modifica el valor del array original

const array = ["hola", 1, 2, 3, null, true, "adios"];

array.slice(1, 3);
console.log(array.slice(1, 4)) // no coje el ultimo valor

const array2 = array.slice(2, 6) // se crear el nueva array apartir del fragmento 
console.log(array2)

// otra forma de usar el slice, utilizando valores negativos, final
const array3 = array.slice(2, -2)
console.log(array3)
