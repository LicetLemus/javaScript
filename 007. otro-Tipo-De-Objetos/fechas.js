// trabajando con fechas

// fecha de ahora
const fecha = new Date()
console.log(fecha)

// cuatro formas de inicializar fechas

// 1. fecha que queramos definir los meses inician en 0, 0-enero 1-febrero
const fecha2 = new Date(1987, 0, 10, 13, 30, 59)
console.log(fecha2)

// 2. atraves de los milisengos

/*

En JavaScript, puedes inicializar fechas utilizando milisegundos desde la Época
(1 de enero de 1970 00:00:00 UTC), también conocida como el "Tiempo Unix". 
Puedes hacer esto utilizando el constructor Date y pasándole el número de 
milisegundos como argumento.
*/

const fecha3 = new Date(10000000000)
console.log(fecha3)


// 3. fechas con milisengundos negativos le resta milisegundos a (1 de enero de 1970 00:00:00 UTC)

const fecha4 = new Date(-1000000000)
console.log(fecha4)

// 4. se definen fechas atraves de string 

const fecha5 = new Date("october 13, 1979 12:15:15")
console.log(fecha5)


////// comparar fechas mayor menor igual /////////////
// si una fecha es posterior 

const fecha6 = new Date(1987, 0, 10, 13, 30, 59)

console.log(fecha > fecha2)
console.log(fecha < fecha5)

// console.log(fecha2 === fecha6), esta mal igualar fechas asi 

// por lo tanto, se convierten en milisengundos , utilizar .getTime

console.log(fecha2.getTime() === fecha6.getTime())


/////// obtener el dia, el mes, año de una fecha ////////

// dia .getDate
console.log(fecha.getDate())
// mes get.Month
console.log(fecha.getMonth() + 1)
// año getFullYear
console.log(fecha.getFullYear())


/////// COMO PODEMOS MOSTRAR UNA FECHA EN UN STRING .toLocaletDateString()//////
/// COMO SE MUESTRA DEPENDIENDO DE LUGAR, EE.UU, ESPANA, ETC  en-US en-GB....

console.log(fecha.toLocaleDateString('en-US'))
console.log(fecha.toLocaleDateString('en-GB'))
