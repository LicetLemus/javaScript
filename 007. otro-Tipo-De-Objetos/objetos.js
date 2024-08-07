//  Trabajando con objets

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

// acceder a los valores de estas propiedades. 

console.log(obj.libros_favoritos)
console.log(obj["4-juegos"])

//acceder a propiedades a través de variables
const prop = "isDeveloper"
console.log(obj["isDeveloper"])

// replicar un objeto

const obj2 = obj;
console.log(obj2)

// ¿ Que pasa si hago un cambio en obj2? le cede su espacio de memoria

obj2.nombre= "Carlo"

// en el obj tambien se cambia el nombre
console.log(obj.nombre)
console.log(obj2.nombre)

// En objeto primitivos no pasa eso: hace una copia de valor y lo almacena en otro....

let val1 = 4;
let val2 = val1;

val2= 6;
console.log(val1)
console.log(val2)

// ENTONCES PARA COPIAR Y DUPLICAR UN OBJETO DENTRO DE OTRO

const obj3 = { ...obj }

console.log(obj.nombre)
console.log(obj3.nombre)

// si hago un cambio en obj3: no cambia el obj porque duplica y asiga espacio en memoria, solo afecta al 
// al obj3 const obj3 = { ...obj }


obj3.nombre = "Maria"

console.log(obj3.nombre)
console.log(obj.nombre)


////// ORDENAR LISTA DE OBJETOS EN FUNCION DE UNA PROPIEDAD ///////


const listaPeliculas = [
    { titulo: "Lo que el viento se llevo", año: 1939},
    { titulo: "Titanic", año: 1997},
    { titulo: "Moana", año: 2016},
    { titulo: "El efecto mariposa", año: 2004},
    { titulo: "Ted", año: 2012}
]

console.log(listaPeliculas)

// ordenar por año .sort: muta el array o valor original

listaPeliculas.sort((a, b) => a.año - b.año )
console.log(listaPeliculas)

listaPeliculas.sort ((a, b) => {
    if (a.titulo < b.titulo) {
        return -1
    } else if (a.titulo > b.titulo) {
        return +1
    } else {
        return 0
    }
})
console.log(listaPeliculas)

