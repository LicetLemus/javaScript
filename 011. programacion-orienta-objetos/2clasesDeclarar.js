// declarar una clase ( objeto de clase persona)
// las variables dentro de una clase se llama atributo
// todas las funciones tanto en objetos como en clase se denominan metodos
// instanciar o crear una persona atraves del metodo constructor
// this: (palabra reservada) hace referencia al objeto en cual esta ahora mismo


class Persona {
    nombre; // variables que forman parte de persona
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre // como se declaran los atributos de los clases
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {  // metodo
        console.log(`Hola, mi nombes es ${this.nombre}, tengo ${this.edad} años`)
    }
}

// como utilizar constructor para crea un objeto de clase persona

const nueva_persona = new Persona("Licet", 28, true)
console.log(nueva_persona)

nueva_persona.saludo()

// instanciacion: es una forma de inicializar una clase

let numero = 60 // inicializar una variable
console.log(typeof numero)
let persona_2 = new Persona("Maria", 34, false) //instanciar una clase
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona) // si es una clase de tipo persona


// operador instanceof - similar a typeof pero para clases
