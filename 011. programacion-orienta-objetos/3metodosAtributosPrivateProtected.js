
class Persona {
// private --> # (atributos privados que solo puede acceder desde detro de la clase)
    #nombre
    #edad

// Protected --> _ (protegidos)
// acceder desde dentro de la clase y clases descendientes
    _isDeveloper = true // inicializando variable protegida 

    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    }

    saludo() {  // metodo
        console.log(`Hola, mi nombes es ${this.#nombre}, tengo ${this.#edad} años`)
    }

    obtenerNombre() {
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }
}


const personaUno = new Persona("Santiago", 25)

// como utlizar los metodos
personaUno.saludo()

console.log(personaUno.obtenerNombre())

// las variables, metodos, publicas se pude llamar desde fuera
// los private and protected, no se pueden acceder desde dentro de la clase




