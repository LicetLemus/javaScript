//// trabajar con metodos mas avanzados : devolver arrays ////
// .map() .filter() .reduce()

const array = ["San sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

array.forEach(valor => {
    console.log(valor)
});

//// 1. quisiera ponerle un 1-ciudad .map () ////

const newArray = array.map((valor, indice) => { // indice es 0, 1, 2, 3, 4 - coomo la posicion en memoria
    return `${indice + 1} - ${valor}`
} )
console.log(newArray)

/* como no esta devolviendo una operacion, podria  optimizar la funcion de esta manera:
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
*/

//// 2. .filter () ////
// ejemplo 1 con nombres y edad
const listaObjetos = [
    {nombre: "Licet", edad: 25},
    {nombre: "Maria", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Carlo", edad: 39}
]
/*
const personasMayores = listaObjetos.filter(obj => { 
    if (obj.edad > 30){
        return true
    } else {
        return false
    }
})
console.log(personasMayores)
*/
// mas optimo >>

const personasMayores = listaObjetos.filter (obj => obj.edad > 30) 
console.log(personasMayores)

// TODAS LAS PERSONAS MENOS MIGUEL
const allPersons = listaObjetos.filter (obj => obj.nombre !== "Miguel")
console.log(allPersons)

// ejemplo 2 con libros
const listaLibros = [
    { id: 1, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien" },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: 3, titulo: "El coronel no tien quien le escriba", autor: "Gabriel García Márquez"},
    { id: 4, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
];

const objeto1 = listaLibros.filter(o => o.autor === "Gabriel García Márquez")
console.log(objeto1)

//// 3.  reduce(): obtener un objeto o valor o algo, apartir de una lista ////

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce ((acumulador, elementoActual, i) => {
    console.log(i);
    return acumulador + elementoActual;
} )
console.log(suma)




//Imaginemos que tenemos un array de objetos que representan transacciones financieras, y queremos calcular el saldo final después de todas las transacciones

const transacciones = [
    { tipo: 'ingreso', monto: 100 },
    { tipo: 'egreso', monto: 20 },
    { tipo: 'ingreso', monto: 50 },
    { tipo: 'egreso', monto: 30 },
    { tipo: 'ingreso', monto: 120 }
];

const saldoFinal = transacciones.reduce((saldoAnt, transaccion) => {
    if (transaccion.tipo === 'ingreso') {
        return saldoAnt + transaccion.monto;
    } else if (transaccion.tipo === 'egreso') {
        return saldoAnt - transaccion.monto;
    }
    return saldoAnt
}, 0);

console.log(saldoFinal)


///// ejercicio para reforzar lo estudiado ////
// para trabajar con un array de objetos que representan productos en una tienda

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    { id: 2, nombre: "Teléfono", precio: 600, stock: 10 },
    { id: 3, nombre: "Tablet", precio: 300, stock: 8 },
    { id: 4, nombre: "Auriculares", precio: 80, stock: 15 },
];

// Ejercicio 1: Incrementar el precio de cada producto en un 10%

/*productos.forEach(valor => {
    console.log(valor.precio)
}) */

const newPrecio = productos.map(valor => {
    return {
        ...valor,
        precio: valor.precio + valor.precio * 0.10}
})
console.log(newPrecio)

// Ejercicio 2: Filtrar los productos con precio mayor a 100

const preciosMayores = productos.filter(obj => obj.precio > 100)
console.log(preciosMayores)

// Ejercicio 3: Calcular el precio total del stock de productos

const saldoTotal = productos.reduce((acumulado, producto)  => {
    return acumulado + (producto.precio * producto.stock);
}, 0)

console.log("Valor total del stock:", saldoTotal)
