// LISTAS ARRAY -> array, arreglo o vectores conjunto de variables puestas en orden
const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(1, "Hola", true, undefined, null);
const lista3 = new Array(3); 
lista3[0] = "Soy el primer elementos-index 0" //no puedo redefinir la lista pero si los valores internos, valor en posicion cero

// se pueden obtenr listas dentro de ellas
const lista4 = [lista, lista2, lista3];


console.log(lista);
console.log(lista2);
console.log(lista3)
// se pueden obtenr listas dentro de ellas
console.log(lista4)



//OBJETOS -> representaciones en datos de objetos de la vida real
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["gorka", "martin", "raul"],
    tarjeta: {
        marca: "sandisk",
        almacenamiewnto: 32,
    },
    "altura-tarjeta": 4 // otra forma de definir los atributos, debe tener comillas por el -(los nombre de variables y atributos no deben tener -)""
}

//como crear un nuevo atributo para este movil
movil.año = 2019;

// cambiar atributos
movil.marca = "iphone"


console.log(movil.contactos)
console.log(movil.tarjeta)
console.log(movil.tarjeta.marca)
console.log(movil.año)
console.log(movil.marca)


//FECHAS ->
// existen librerias de apoyo como Moment.js

const ahora = new Date(); // fecha exacta del momento en que se creo la variable
console.log(ahora)

//tres maneras de definir las fechas 

const fecha_milis = new Date(10) // utilizando milisegundos desde la fecha cero
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date(2024, 1, 27) // inicia en cero, enero seria mes cero
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const año = ahora.getFullYear()

console.log(dia, mes, año)