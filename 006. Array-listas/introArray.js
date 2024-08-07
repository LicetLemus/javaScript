//// 1. como trabajar con listas, array, arreglos, vectores ////
let var1 = 45;
let array = [1, "hola", "false", { id: 5 }, null, undefined, var1];
console.log(array)

//// 2. acceder a los valores de un array atraves de su posicion ////
// array[indice] -> o, 1, 2,...

console.log(array[0]);
console.log(array[3]);

//// 3. introducirle nuevos valores al array ////
// 3.1 .push() .unshift() -> mutan el valor del array
// push -> valores al fnal
array.push("final", "doce", 12, true);
console.log(array);
// .unshift -> valores al principio

array.unshift("inicio", "uno");
console.log(array);

//// 4. metodos para eliminar valores en nuestro array ////
// .pop() .shift() -> mutan el valor del array
const array2 = [1, 3, "hola", false]
// valores al final
array2.pop();
console.log(array2);
// valor al inicio 
array2.shift();
console.log(array2);

//// 5. metodos para eliminar modificar, añadir valores al array ////
// .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6]
// Eliminar valores. splice(indice, numValores)
array3.splice(2, 2); // apartir del 2 elimina 2 numeros 
console.log(array3)

// añadir valores. splice(indice, 0, numValores)
array3.splice(3, 0, "Hola","añade 3");
console.log(array3)

// modificar valores. splice(indice, 1, numValores)
array3.splice(3, 1, "modifica hola");
console.log(array3);