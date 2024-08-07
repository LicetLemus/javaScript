// agragar un listener al boton para que haga cosas

const boton = document.querySelector("#btn")

// console.log(boton)

boton.addEventListener("click", () => {
    // console.log("click")
    // alert("Se ha hecho click")
    // confirm("¿Estás de acuerdo?") && console.log("OK")

    /*
    confirm("¿Estás de acuerdo?") 
    ? console.log("OK")
    : console.log("NO ESTA DE ACUERDO!!")
    */

    const respuesta = confirm("¿Estás seguro?")
    if (respuesta) {
        console.log("Estás de acuerdo")
    } else {
        console.log("No estás de acuerdo")
    } 

})


const botonInfo = document.querySelector("#info")


botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es: " + nombre)
    } else {
        console.log("No has introducido un nombre")
    }
    
} )

const lista = [{
    nombre: "Licet", 
    edad: 28,
    sexo: "femenino"
}, {
    nombre: "Marco",
    edad: 15,
    sexo: "masculino"
}, {
    nombre: "Amaya",
    edad: 30,
    sexo: "femenino"
}]

// console.log(lista), en vez de esto, utilizar...
console.table(lista) // se muestrea la info, en una tabla

