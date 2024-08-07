const persona = {
    nombre: "Licet",
    edad: 28
}

console.log(persona)

function obtenerDobleEdad(edad) {
    return edad * 2
}

const dobleEdad = obtenerDobleEdad(persona.edad)
console.log(dobleEdad)

// para ir probando nuestro codigo (depuracion) y saber que esta pasando con las funciones variables


function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)