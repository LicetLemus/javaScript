// tres formas de definir variables 
var variables;
let variableLet_;

// para declarar contantes const - no puede cambiar
const constante = "Hola soy una constante";

console.log(constante);
// si cambio la constante constante = "Adios" nos da un error

 //variables: caja donde se almacena un  valor- que puede cambiar 
var a = 1;
console.log(a);

a = 4;
console.log(a);

//let es similar al var
let b = 3;
console.log(b);

b = 5;
console.log(b);

// diferencia entre var (afecta todo el codigo) 

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "soy la segunda variable"
}

console.log(variable)

// y let (solo afecta el bloque done esta siendo declarada)

let variableLet = "soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet = "soy la segunda variable LET";
}

console.log(variableLet)

//typeof: nos dice que tipo de valor es 

console.log(typeof 1)