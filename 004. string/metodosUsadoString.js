/// metodos mas utilizados con cadenas de caracteres
//// 1. obtener la longitud de un string - str.leength, es una propiedad////

let str = "hola soy un string";
console.log(str.length);

//// 2. obtener partes de cadenas de caracteres, son metodos////
// 2.1 slice ()
let slice_str = str.slice(5, 10);
console.log(slice_str);

// 2.2 substring()
let substring_str = str.substring(5, 10);
console.log(substring_str);

// 2.3 substr()
let substr_str = str.substr(5, 10);
console.log(substr_str);

//// 3. Reemplazar el contenido de una cadena de texto////

let cadena = "hola mi nombre es Licet";
console.log(cadena);

console.log(cadena.replace("Licet", "Miguel"));

// si quiero cambiarlo en la original debo
cadena = cadena.replace("Licet", "Miguel");
console.log(cadena);

let text_largo =
  "Erase una vez un zorro con mucho miedo que vivía permanentemente huyendo de todo. En la huída siempre se caía y se volvía a levantar";

  //.replace actua solo sobre la primera instancia, para cambiar todo se debe
  // usar las expresiones regulares /g (global/ reemplaza todas las instancias

console.log(text_largo.replace('se', 'el'))  

console.log(text_largo.replace(/se/g, 'el'))


