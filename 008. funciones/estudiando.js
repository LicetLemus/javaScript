// 1. Crea una función llamada numeroMayor() que toma tres números como entrada 
// y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».


function numeroMayor(n1, n2, n3) {
    if (n1 > n2 && n2 < n3) {
        return n1
    } else if (n2 > n1 && n1 < n3) {
        return n2
    } else if (n3 > n1 && n1 < n2) {
        return n3
    } else {
        return "Son iguales"
    }
}

const respuesta = numeroMayor(2, 2, 2)
console.log(respuesta)

// funcion flecha 

const numeroMayor1 = (n1, n2, n3) => (
    (n1 > n2 && n2 < n3) ? n1 :
    (n2 > n1 && n1 < n3) ? n2 :
    (n3 > n1 && n1 < n2) ? n3 :
    (n3 === n1 && n1 === n2) ? "son iguales":  
    " "
)

const result = numeroMayor1(2, 8, 2)
console.log(result)

// 2.  Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True
// si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.


function esVocal(sim) {
    if (["a", "e", "i", "o", "u"].includes(sim)) {
        return true
    } else {
        return false
    }
}

const respu = esVocal("e")
console.log(respu)

// funcion flecha 

const es_vocal = car => (["a", "e", "i", "o", "u"].includes(car));

console.log(es_vocal("g"))

/// 3. Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

function generar_caracteres(car, n) {
    let resultado = ' '
    for (let i = 0 ; i < n; i++) {
        resultado = resultado + car
    }
    return resultado
}

console.log(generar_caracteres('x', 5))

// funcion flecha 
const multiplicarCaracterFlecha = (caracter, n) => {
    let resultado = '';
    for (let i = 0; i < n; i++) {
        resultado += caracter;
    }
    return resultado;
};

console.log(multiplicarCaracterFlecha('x', 5))

/////// 3. Crear una función inversa() que calcule la inversión de una cadena y lo retorne. Por ejemplo, la cadena «Hola Mundo» debería retornar la cadena «odnum aloh» (retornar todo el String en minúsculas).


function inversa(cadena) { // metodo.reverse
    // Convertir la cadena a minúsculas y dividirla en un array de caracteres
    const caracteres = cadena.toLowerCase().split('');

    // Utilizar el método reverse para invertir el array de caracteres
    const inverso = caracteres.reverse().join('');

    return inverso;
}

const res = inversa("Hola clase");
console.log(res);


/////////////////////////////////////////////

// 1 - Crea una función que tome dos números como parámetros y devuelva su suma:

function suma(a, b) {
    return a + b
}

console.log(suma(2, 3))

// flecha 

const suma1 = (a , b) => a + b;
console.log(suma1(2, 3))

// 2 - Crea una función que tome un número como parámetro y devuelva «par» si es par y «impar» si es impar:

function esParImpar(a) {
    if(a % 2 === 0) {
        return "Es par"
    } else {
        return "Es impar"
    }
}
console.log(esParImpar(10))

// flecha 
const esParImpar1 = e => (
    (e % 2 === 0) ? "Es par":
    "Es impar"
)
console.log(esParImpar1(1005))


// 3 - Crea una función que tome un array como parámetro y devuelva el número de elementos del array:

function longitud(array) {
    return array.length;
}
console.log(longitud([2, 3, 5, 6]))

// flecha 

const longitudArray = array1 => array1.length;
console.log(longitudArray([2, 3, 5, 6, 9,10, "Hola", {id: 2}]))

// 4 - Crea una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto:

function objetoPropiedades(obj) {
    return Object.keys(obj).length;
}

console.log(objetoPropiedades({a: 1, b: 2, c: 3}))

// 5 - Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

const multiplicarArray= (array) => {
    const minimo = Math.min(...array);
    const maximo = Math.max(...array);
    return minimo * maximo;
}

const multiplicacion = multiplicarArray([2, 5, 10, 2]);
console.log(multiplicacion) 

// 6 - Crea una función que tome un array de números como parámetro y devuelva el número más grande del array:

function numeroMayor(array) {
    let mayor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor;
}

console.log(numeroMayor([2, 7, 3, 9, 4]))

// 7 - Crea una función que tome un array de strings como parámetro y devuelva un nuevo array con todos los strings en mayúsculas:

function numeroArray(array) {

}


// Pues seguimos con los números. Escribe un script  que dado un 
// número nos devuelva true si es un número par y false si es un número impar.
// No usar condiconales.

var num = parseInt(prompt("Entrar numero entero")); // 
var rest = num % 2;
var par = rest == 0;
console.log("¿Es par? " + par);
