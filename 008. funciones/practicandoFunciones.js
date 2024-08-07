// practica funciones

/* 
Ejercicio 1: Suma y Resta
Crea una función llamada operaciones que tome dos números y realice las siguientes operaciones:

Sumar los dos números.
Restar el segundo número del primero.
Imprime los resultados en la consola.
*/

function operaciones(a, b) {
  const suma = a + b;
  const resta = b - a;
  console.log(`suma: ${suma}, resta: ${resta}`);
}

operaciones(2, -3);

/* 
Crea una función llamada esNumeroPar que tome un número como 
parámetro y determine si es par. 
Devuelve true si es par y false si es impar.
*/

function esNumeroPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esNumeroPar(44));

// Forma mas eficiente
function esNumeroPar(num2) {
  return num2 % 2 === 0;
}

console.log(esNumeroPar(2500));

function esNumeroImpar(num3) {
  return num3 % 2 !== 0;
}

console.log(esNumeroImpar(3001));

/* 
Crea una función llamada saludo que tome el nombre de una 
persona como parámetro y devuelva un saludo personalizado. 
Por ejemplo, si el nombre es "Juan", debería devolver "¡Hola Juan!".
*/

function saludo(nombre) {
  return `¡hola ${nombre}!`;
}

console.log(saludo("licet lemus"));

/* 
Crea una función llamada potencia que tome dos números 
como parámetros calcule la potencia del primero elevado 
al segundo.
*/

function potencia(a, b) {
  return a ** b; // existe Math.pow(a, b)
}

console.log(potencia(2, 3));

/* 
Crea una función llamada contarVocales que tome una cadena como 
parámetro y cuente el número de vocales 
(a, e, i, o, u) en la cadena. Devuelve el resultado.
*/

function contarVocales(cadena) {
  let contador = 0;
  const cadena_minuscula = cadena.toLowerCase();

  for (i = 0; i < cadena.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(cadena_minuscula[i])) {
      contador++;
    }
  }
  return contador;
}

const cadena1 = contarVocales("Aaa ese iii oyo umj")
console.log(cadena1);

console.log(contarVocales("liolofdf"));
