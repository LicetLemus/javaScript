//// 1. concatenacion array .concat(lista2) ////

const array1 = ["Hola", 2, false, null]
const array2 = ["adios", 8, true, undefined]
const array3 = ["nuevo", 4, 6]

console.log(array1.concat(array2).concat(array3))

const array4 = array1.concat(array2).concat(array3)
console.log(array4)

//// 2. unir dos listas con el factor propagacion ...////
console.log(...array4);

const array5 = [...array1, ...array2];
console.log(array5);

// ERROR!! SIN ... NO ES FACTOR DE PROPAGACION 
const array6 = [array1, array2];
console.log(array6);
// array de array

//// 3. unir dos listas con el factor propagacion ...////