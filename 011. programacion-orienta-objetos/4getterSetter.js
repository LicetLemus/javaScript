
class Persona {
        #nombre
        #edad

        _isDeveloper = true 
    
        constructor(nom, edad) {
            this.#nombre = nom
            this.#edad = edad
        }
    
        saludo() { 
            console.log(`Hola, mi nombes es ${this.#nombre}, tengo ${this.#edad} años`)
        }
    
        obtenerNombre() { // Funcion getter - accedo (de forma controlada) a algun atributo protegido
            return this.#nombre
        }
    
        #obtenEdad() {
            return this.#edad
        }

        getEdad() { // las funciones getter se puede acceder desdee afuera
            return this.#edad
        }

        setEdad(nuevaedad) {
            this.#edad = nuevaedad
        }
    }
    
    
    const personaUno = new Persona("Santiago", 25)

    
// GETTER --> método que nos permiten obtener atributos/metodos privados o protegidos (funcion obtenNombre, getEdad)
const edad = personaUno.getEdad() // accede a una propiedad que es privada
console.log(edad)


// SETTER --> método que nos permite cambiar el valor de alguno de los atritutos privados o protegidos
// cambiar la edad de la persona

personaUno.setEdad(34)
console.log(personaUno.getEdad())