// Metodos de cadenas de textos parte 2
//// 1. convertir de mayuscula a minuscula - toLowerCase() - toUpperCase() //////

let input = "Capricornio"
let db = "capricornio"
// en la base de datos esta en minuscula
console.log(input === db)

console.log(input.toLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toLocaleUpperCase())
console.log(input.toUpperCase() === db.toUpperCase())

//// 2. concatenar dos cadenas de caracteres //////
// 2.1 .concat

let str_1 = "Hola, soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena"

console.log(str_1.concat(" ", str_2))
// " ", para que se vea el espacio entre ambos o solamente darle espacio en la primera cadena

// 2.2 mas +

console.log(str_1 + " " + str_2 + " " + "agrego texto")

// 2.3 comillas invertidas `` 

console.log(`${str_1} ${str_2}`)

///// 3. Eliminar espacio al inicio y final porque no com=ntrolamos lo que la gente escribe 
// 3.1 metodo trim()

let srt_3 = "    Hola soy un string con espacio al final.    "

console.log(srt_3)
console.log(srt_3.length)

console.log(srt_3.trim())
console.log(srt_3.trim().length)

// 3.2 si quiero eleiminar solo los del principio 
console.log(srt_3.trimStart())
console.log(srt_3.trimStart().length)

//// 4. obtener el caracter que hay en cierta posicion //////
let str_4 = "Hola soy el string numero 4" // equivalente a ["H", "0", "L", "etc"]

console.log(str_4.charAt(5))
console.log(str_4[5]) // con corchetes como una array

//// 5. obtener la posicion de una palabra dentro de un string //////

let str_5 = "Hola soy Licet y me gusta la musica. Mi nombre es Licet y mi apellido Lemus"

console.log(str_5.indexOf("Licet"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Licet"))






