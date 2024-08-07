//// 1.  Operadores .valueOf() - obtener a partir de literales ////
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(b. valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str. valueOf());


//// 2. NaN (not a Number) - Infinity ////
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let num = 19;
let div = 0;
let div2 = null;

console.log(num / div);
console.log(num / div2);

//// 3. como convertit los string a valores numericos con number, parseInt y parseFloat ////
let numero = '5.89';
let numero2 = 17.2
console.log(typeof numero);

// 3.1 como obtener el valor numerico y hacer operaciones
console.log(numero + numero2); // concatena el primero es string y convierte el segundo en string
console.log(Number(numero) + numero2);

// 3.2 parseInt: estruir un valor dentro de otro - convertir a un entero
// 3.3 parseFloat

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));


//// 4. Numeros hexadecimales: numero en base 16 ////
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));


//// 5. Obetener los valores maximos y minos en Javascript ////
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(5 ** 1024) // dos ** son elevado a 