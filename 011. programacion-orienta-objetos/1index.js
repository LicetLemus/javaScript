// declarar un objeto
const persona = {
    nombre: "Licet",
    edad: 28,
    isDeveloper: "True",
    saludo: function() {
        console.log("Hola")
    }
}
// console.log(persona)
persona.saludo()

// Que pasa si quiero crear otra persona ????
// una es copiar cada linea, creando mucho codigo

const otra_persona = {
    nombre: "marly",
    edad: 30,
    isDeveloper: "false",
    saludo: function() {
        console.log("Hola")
    }
}

otra_persona.saludo()

// si se que hay algo que se repite, se pude optimizar

// 1. podriamos crear una Factory function

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function() {
            console.log("¡Hello! :)")
        }
    }
}

const nueva_persona = creaPersona("Juan", 35, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Martha", 44, false)
console.log(nueva_persona2)

// es una opcion pero hay otra forma mas eficiente, encapsulada, profesional y segura: CLASES

