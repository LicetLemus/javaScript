//// si algun elemento cumple una condicion 

// .some(): true si algno o uno cumple la condicion

const array = [3, 6, 8, ,9, 0, 34, 2352564, -34, 12 -5]

const res = array.some(valor => valor < 0)

console.log(res)

const exist = array.some(valor => valor === 90)
console.log(exist)


//// ejemplo 2
const listaObjetos = [
    {nombre: "Licet", edad: 25},
    {nombre: "Maria", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Carlo", edad: 39}
]

const existe = listaObjetos.some(persona => persona.nombre === "Licet")
console.log(existe)


//// como obtener una lista apartir de un objeto iterable
// iterable: objetos especiales que permiten interar dentro de ellos - string
// a traves de corchetes puedo acceder a alguna parte
const str = "Hola soy Licet"

console.log(str[5])

// Obtener un lista apartir del strin .from()

const ar_str = Array.from(str)
console.log(ar_str)

// obtner un iterable de todos los indices de nuestro array

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)