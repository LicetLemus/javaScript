//// 1. Principales operaciones aritmeticas ////
let a = 3.5;
let b = 4.8;

// 1.1 suma
console.log(a + b);
// 1.2 resta
console.log(a - b);
// 1.3 multiplicacion 
console.log(a * b);
// 1.4 division
console.log(a / b);

//// 2. Representacion de los numeros en cadenas de texto ////
// pasar a number - a string
console.log(typeof a)
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s)


// 3. Redondeo de numeros decimales.
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(d.toPrecision(3)); 
// redondeo cientifico cuantos digitos de precision 
// limita el numero de cifras significativas
// devuelve un string


console.log(d.toFixed(3));
console.log(typeof d.toFixed(3)); 
// limita los decimales al valor que le ponga (3) 
// devuelve un string