//////// strings (cadenas de caracteres) /////////
/*
- se puede definir:
let str_sng = 'hola soy un texto'; - comilla simple
let str_dbl = "hola soy un texto"; - comilla doble
*/


let str = "hola soy un texto";
console.log(str);

// un texto entre comillas 

let str_comillas = "el otro dia me dijo literalmente \"saca la basura\""
console.log(str_comillas)

let str_comillaSimple = 'el otro dia me dijo literalmente "saca la basura, de una vez"'
console.log(str_comillaSimple)

////////// comillas invertidas - backticks ///////////
let str_backticks = `esto es un string con backticks`
console.log(str_backticks)

// estas comillas tienen una funcionalidad extra - introducir variables dentro de un string
let nombre = "Licet Lemus"
let saludo = `hola, ${nombre} bienvenido` 

console.log(saludo)

////////// plantillas HTML con las comillas `` ///////////

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`
console.log(plantilla)

////////// Introduccion de variables en HTML ///////////

let libros = ["Empieza por el por qué", "el monje que vendio su ferrari", "el poder del ahora"]

