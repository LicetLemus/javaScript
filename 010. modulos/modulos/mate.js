// modulo: una parte de codigo que se puede reutilizar en diferentes partes de nuestro programa o desarrollo 



function suma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a) {
    // factorial de cinc0 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 1; i <= a; i++ ) {
        factorial *= i;
    }
    return factorial;
}


// declarar que las funciones se pueden acceder desde el exterior

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}