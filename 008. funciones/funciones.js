// Que son las funciones: bloques de codigo que we ejecuta con un fin especifico 
// como se declaran 
// como se utilizan

/*
function saludar(parametro_1, parametro_2, parametro_3) {

}
*/

// saludar("Licet")

const nom = "Lemus"
saludar(nom)

function saludar(nombre) {
    console.log(`hola ${nombre}`)
}

/// en que consisten los parametros

let nombre_2 = "Juan"
console.log(nombre_2) // no me cambia el nombre asi le haya camiado en la funcion 

despedir(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`adios ${nombre}`)
}

// que pasa en objetos 

let person = { nombre:"Carlo", apellido: "Bustamante", edad: 35}
console.log(person)

// se hace la llamada a la funcion atraves de saludarPerson(person)
saludarPerson(person)
console.log(person)

function saludarPerson(objeto) {
    // que pasa si dentro le hago un cambio
    // se cambia el objeto original ver console.logsaludarperson - pasa en los objetos
    objeto.nombre= "Maria"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido} ${objeto.edad}`)
}


// que pasa si llamo a saludar persona sin ningun valor

saludar()

/////////////////////////////
// siempre le pasa parametro o NO, tenga un valor por defecto 
// quiero que siempre sea 7, entonces numero=7 (parametro por defecto)

function imprimeNumero(numero = 7) {
    console.log(numero)
}

imprimeNumero()

// definiir funciones con unos paframetros indeterminados xon el propagacion ...parametros
// imprime todos los parametros que le diga en imprimir() 

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "Hola", { id: 9})

//// 

function suma(...num) {
    return num.reduce((a, b) => a +b)
}

const s= suma(1, 2, 3, 4)

console.log(s)


///////////
// Ambito de una funcion 


let variable = "si accede de adentro a algo afuera"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable2 = "No se accede desde afuera porque esta dentro"
    return a * b
}

console.log(variable2)
console.log(multiplicar(4, 9)) // si lo dejo vacio () multiplica 0 * 0



