// comparaciones

// igualdad

if (5 == 5) {
    console.log("5 es muy igual a cinco")
}

// sino pongo == se podria presentar 

let a = 5;
console.log(typeof a)
let b = "5"; 
console.log(typeof b)

// solo compara el valor
if (a == b) {
    console.log("a es igual a b - igualdad debil")
}

// compara el valor y el tipo 
if (a === b) {
    console.log("a es igual a b - igualdad fuerte")
} else {
    console.log("No es igual")
}

// desigualdad 

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - debil")
}

if (c !== d) {
    console.log("c es diferente a d - fuerte")
}

// mayor que - menor que 

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}

if (max < min) {
    console.log("max es menor que min")
}

let max1 = 5;
let min1 = 5;

if (max1 >= min1) {
    console.log("max es mayor que min")
}

if (max1 <= min1) {
    console.log("max es menor que min")
}