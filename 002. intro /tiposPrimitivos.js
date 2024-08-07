//tipos primitivos

// number 
4;
0;

//string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleanos 
true;
false;

//nulo (espacio vacio en memoria) y undefined (valor indefinido no esta asignado en memoria)
null;
undefined;

// diferencia entre null, undefined, false, 0 - todas son falsy hace que la condicio no se cumpla
if (null) {  // no cumple con cualquiera de los anteriores (si el valor de la variable es verdadera cumple)
    //si cumple
    console.log("cumple")
} else {
    // si no cumple
    console.log("no cumple")
}