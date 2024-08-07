// carga y sobre carga de funciones 

function saludar(nombre) {
    return `¡Hola ${nombre}!`
}

console.log(saludar("Licet")) // normalmente asi, ppero sobrecarga y demas 


///////////// carga de funciones - stack/////////// 
// El interprete, interpreta el codigo, ejecuto saludo, y luego hola que esta dentro de saludo

function saludo() {
    hola()
}

function hola() {
    console.log(`Hola! soy la funcion hola()`)
}

saludo()

// 1. carga global()
// 2. saludar() global()
// 3. hola() saludar() gobal()
// 4. saludar() global()
// 5. global()


///////////// sobrecarga de funciones - OVERFLOW///////////
/*
function recursivo() {
    recursivo()
} // no tiene fin, hay un bucle, se genera una sobrecarga

recursivo()
*/