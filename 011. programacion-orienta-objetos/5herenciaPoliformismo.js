// 1. inheritance - herencia (respecto a las clases)

class Persona {
        _nombre
        _edad
        constructor(nombre, edad) {
            this._nombre = nombre
            this._edad = edad
        }
    
        saludo() {  // metodo
            console.log(`Hola, mi nombes es ${this._nombre}, tengo ${this._edad} años`)
        }
}

// crear una nueva clase basado en esta clase inicial - Persona
// clase Developer que tenga una herencia de Persona - extends

class Developer extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad) // llama al contructor de la clase superior
        this.lenguaje = lenguaje
    }

    saludo() { // Override - sobreescribir - poliformismo
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevo_Developer = new Developer("Carla", 45, "Javascript")
console.log(nuevo_Developer)
nuevo_Developer.saludo() 

// poliformismo - (varias formas) Quiero que el saludo sea de otra manera
