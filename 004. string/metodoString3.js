// metodos de cadenas de texto (parte 3)

////1. utilizar expresiones regulares https: //regexr.com ////

// 1.1 coincidencias en un texto

let text_largo ="Erase una vez un zorro con mucho miedo que vivía permanentemente huyendo de todo. En la huída siempre se caía y se volvía a levantar";

// cuantas veces aparece la palabra - se

console.log(text_largo.match(/se/g))
console.log(text_largo.match(/un/g))

// 1.2 si el texto coontiene una palabra

console.log(text_largo.includes("vaca"))
console.log(text_largo.includes("zorro"))

// 1.3 saber si un texto empieza con una palabra
// 1.4 si un texto termina con una palabra (cadena de caracteres)

console.log(text_largo.startsWith("Erase"))
console.log(text_largo.endsWith("volvía a levantar"))
console.log(text_largo.startsWith("una"))
console.log(text_largo.endsWith("levantar."))