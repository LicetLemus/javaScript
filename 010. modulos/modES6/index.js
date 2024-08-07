////// import { suma, eleva, nombre } from './modulos/matematicas.js' - importar lo que necesito
/*
const sum = suma(4, 12)
console.log(sum)


const potencia = eleva(2, 21)
console.log(potencia)

*/

/////////// si quiero importar todas las propiedades, metodos y funciones del modulo ///////////

import * as modulosMatematicas from './modulos/matematicas.js'
// import getAutor from './modulos/literatura.js'
import getAutor, { libro } from './modulos/literatura.js'

const sum = modulosMatematicas.suma(4, 12)
console.log(sum)


const potencia = modulosMatematicas.eleva(2, 21)
console.log(potencia)

console.log(modulosMatematicas.nombre)

console.log(getAutor()) // se llama porque es funcion getAutor()

console.log(libro)


