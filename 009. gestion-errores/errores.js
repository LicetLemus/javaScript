const miFunction = valor => {
    if (typeof valor === "Number") {
        return valor * 2
    } 
    // return false
    throw new Error("El valor debe ser de tipo número")
}
// const elDoble = mifunction("ala")

// para Prevenir que ese valor no sea numerico TRY Y CATCH - gestionar y controlar

const miFunction1 = valor => {
    if (typeof valor === "number") {
        return valor * 3
    }
    throw new Error("El valor debe ser de tipo número")
}


try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta");
    const numero = "Hola"
    const elDoble = miFunction1(numero);
    console.log(elDoble);

} catch (e) {
    // En caso de que falle, ejecuta esto
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR:"); 

} finally {
    console.log("Se ejecuta siempre, si hay o no un error")
}

/*
Parametro e de catch - parar catch console.error
*/


/// ERRORES MAS COMUNES 
// - InternalError: errores internos, por ejemplo una funcion se llama a si misma de forma indefinida (recursividad) (overflow)
// - syntaxError: Hay un fallo de sintaxis, mal escrito
// - TypeError: Por ejemplo, estamos pasando a una funcion un numero cuando espero un booleano
// - RangeError: Rango, estamos tratando de acceder a una posicion que esta sobrepasando, por ejempo un array de 10 y quiero acceder al 12
// - ReferenceError: No existe la referencia 

//// Errores preconfigurados en JavaScript - leer un poco mas
