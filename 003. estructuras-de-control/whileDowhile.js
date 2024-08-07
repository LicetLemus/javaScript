// buces WHILE 

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++; // sino se hace, queda el bucle infinito
}

// ejemplo del cuaderno
let contador = 10; 
while (contador > 0) {
    console.log(contador);
    contador = contador - 1;
}

// DO WHILE 

let crono = 2;

do {
    console.log(crono);
    crono = crono - 1;
} while (crono > 2); // imprime una vez crono, luego como  no cumple no corre

/* si evaluo en while, no cumple 
let contador1 = 2; 
while (contador1 > 2) {
    console.log(contador1);
    contador1 = contador1 - 1;
} 
*/

i = 11; 

do {
    console.log(i);
    i++;
} while (i < max)
