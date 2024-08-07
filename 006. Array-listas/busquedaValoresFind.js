//// metodos modernos de javascript ////

// 1. iterar valores de una lista

const array = ["hola", "2", 5, 90, false, undefined]

// forma antigua y poco eficiente 
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// forma moderna (mas eficiente) .forEach
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];

arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// busqueda de un valor dentro de una lista .find()
// quiero encontrar el elemento 90 del array

const variable = array.find(valor => {
    if (valor === 90){
        return true
    }
})
console.log(variable)

// tiene mas sentido con objetos 

const listaObjetos = [
    {nombre: "Licet", edad: 25},
    {nombre: "Maria", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "CaRLO", edad: 39}
]

/* const objeto = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
} )
console.log(objeto.edad)
*/

// simplificando mas eficiente

const objeto = listaObjetos.find(o => o.nombre === "Miguel")

console.log(objeto.edad)

// otra forma mas eficiente 

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad)

const listaLibros = [
    { id: 1, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien" },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { id: 3, titulo: "El coronel no tien quien le escriba", autor: "Gabriel García Márquez"},
    { id: 4, titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
];

const objeto1 = listaLibros.filter(o => o.autor === "Gabriel García Márquez")
console.log(objeto1)

const { titulo } = listaLibros.find(o => o.autor === "J.R.R. Tolkien")
console.log(titulo)
