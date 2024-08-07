// importar/exportar las funcion del modulo matematica
// 1 - opcion CommonJS - require
// 2 - Import ES6 - import

const moduloMatematicas = require('./modulos/mate');
// si solo quiero exportar unas funciones
// const { factorial, suma } = require('./modulos/matematicas')
console.log(moduloMatematicas);

// const fact = moduloMatematicas.factorial(5)
const { factorial } = moduloMatematicas;
const fact = factorial(5);
console.log(fact);


const sum = moduloMatematicas.suma(12, 90);
console.log(sum);

const multi = moduloMatematicas.multiplica(4, 2);
console.log(multi);

const elevado = moduloMatematicas.eleva(2, 6);
console.log(elevado);


