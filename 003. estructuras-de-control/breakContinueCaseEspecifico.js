// 1. casos especificos - para utilizar break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < lista.length; i++) {
    // Que haga el login a todo los elementos, menos el 3

    if (lista[i] === 3) {
        continue;
    }

    var j = 5;
    const k = 10;
    console.log(lista[i])

// Quiero que cuando lista > 5 se rompara el bucle entonces 
    if (lista[i] > 5) {
        break;
    }
}




// 2. Cuál es el ámbito de un bucle: se refiere al alcance de las variales declaradas dentro del bucle

/*
let - local 
console.log(i) - i is not defined, porque esta definida dentro del bucle
console.log(k) - k is not defined, alacance del bloque donde se declaro
se podria declarar dentro del bucle

var - global 
console.log(j) - corre normal 5
*/
