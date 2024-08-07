// modulo: una parte de codigo que se puede reutilizar en diferentes partes de nuestro programa o desarrollo 
// en package.js type "module", se cambia la forma de exportar
// utilizamos export al inicio de la funcion. no la funcion de al final como el archivo matematicas anterior 


export function suma(a, b) {
    return a + b
}

export function multiplica(a, b) {
    return a * b
}

export function eleva(a, b) {
    return a ** b
}

export function factorial(a) {
    // factorial de cinc0 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 1; i <= a; i++ ) {
        factorial *= i;
    }
    return factorial;
}


export const nombre = "matematicas"