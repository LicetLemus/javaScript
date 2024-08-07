// funciones tipo flecha y funciones anonimas: nuevas formas de declarar funciones

array = [1, 2, 4, 5, 8, 10, 20]

// doble del valor del array 

// 1. como una function de la vista antes, el doble de un numero
function dobleArray(valor) {
    return valor * 2
}
console.log(dobleArray(3))

/////////// 1. forma de hacerlo con .map con una funcion dentro

/*
const array2 = array.map(valor => {
    return valor * 2
})
console.log(array2)
*/ 

// para definir una funcion flecha se debe guardar en una var, const, let
const array2 = array.map(valor => valor * 2) // si solo devuelve un valor se pude quitar return y llaves
console.log(array2)

// funcion anonima, no tiene nombre se utiliza dentro del .map

/////////// 2. Tipo flecha mas utilizada

const arrayDoble = valor => valor * 2
const array3 = array.map(arrayDoble)

console.log(array3)


/////////// practica

// 1. Doble y Suma:
// Crea una función tipo flecha llamada doble que tome un número 
// como parámetro y devuelva el doble de ese número.

const doble = valor => valor * 2
console.log (doble(2))

// Crea otra función tipo flecha llamada suma que tome 
// dos números como parámetros y devuelva la suma de ambos.

/* funcion normal 
function suma(a, b) {
    return a + b
}

console.log(suma(2, 2))
*/

/*
function suma(...num) {
    return num.reduce((a, b) => a +b)

}

const s = suma(2, 3, 5, 6)

console.log(s) */

const suma = (a, b) => a + b
console.log(suma(3, 6))

// Crea una función tipo flecha llamada esPar que tome un número 
// como parámetro y devuelva true si es par y false si es impar.

function esPar(num) {
    return num % 2 === 0;
}

console.log(esPar(10))
//////// flecha

const esPar1 = num => num % 2 === 0
console.log(esPar1(20000))


// Crea una función tipo flecha llamada saludo que tome un nombre 
// como parámetro y devuelva un saludo personalizado.

function saludo(nombre) {
    return `Hola ${nombre}`
}
const s = saludo("Licet")
console.log(s)

/////// tipo flecha

const saludo1 = (nombre) => `¡Hola ${nombre}!`;
const saludar = saludo1("Licet Lemus");

console.log(saludar)


// Crea una función tipo flecha llamada longitudCadena que tome 
// una cadena como parámetro y devuelva la longitud de la cadena.

const longitudCadena = cadena => cadena.length
const cadena = longitudCadena("Hola soy una cadena")
console.log(cadena)


// con un bucle for 

function longitud(cadena) {
    let longitudCadena = 0
    for (let i = 0; i < cadena.length; i++) {
        longitudCadena++
    }
    return longitudCadena++
}

console.log(longitud("Hola soy una cadena"))

// con una function normal 

function longitud1(cadena) {
    return cadena.length
}

console.log(longitud1("Hola soy una cadena"))



