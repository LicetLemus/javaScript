// labels - etiquetas: nombrar los bucles for - while
let unidades = 0;
let decenas = 0;

buclesDecenas: while (true) {
    buclesUnidades: while (true) {
        // imprimir el numero actual
        console.log(`el numero actual es: ${decenas}${unidades}`)
        unidades++
        
        // Reiniciar unidades cuando alcanza 10 y salir del bucle interno
        if (unidades === 10) {
            unidades = 0;
            break buclesUnidades
        }
        // Incrementar decenas y salir del bucle externo cuando alcanza 2
        if (decenas === 2) {
            break buclesDecenas
        }
    }
    decenas++
}
console.log("ya hemos terminado")


// otra forma de hacerlo - for 

let unidad = 0;
let decena = 0;

for (let decena = 0; decena < 2; decena++) {
    for (let unidad = 0; unidad < 10; unidad++) {
        console.log(`el numero actual es: ${decena}${unidad}`)
    }
}

console.log("hemos terminado")

