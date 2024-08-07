//  Ejercicio que utiliza varias funciones de array en JavaScript, como 
// .forEach, .slice, .find, .map, .filter, y .reduce. 
// Este ejercicio simula el manejo de una lista de estudiantes:

const estudiantes = [
    { id: 1, nombre: "Juan", edad: 20, calificacion: 85 },
    { id: 2, nombre: "Ana", edad: 22, calificacion: 95 },
    { id: 3, nombre: "Miguel", edad: 21, calificacion: 75 },
    { id: 4, nombre: "Elena", edad: 19, calificacion: 88 },
];

//// Ejercicio 1: Imprimir el nombre de cada estudiante usando for y forEach ////

for (let i = 0; i < estudiantes.length; i++) {
    console.log("Lista de estudiantes:", estudiantes[i])
}

estudiantes.forEach (valor => {
    console.log("Estudiante:", valor.nombre)
})

//// Ejercicio 2: Obtener estudiantes mayores de 20 años usando filter ////

const estudianteMayores = estudiantes.filter(obj => obj.edad > 20)
console.log("Estudiantes mayores de 20:", estudianteMayores)

//// Ejercicio 3: Encontrar estudiante con calificación mayor a 90 usando find////

const calificacionMayores = estudiantes.find(obj => obj.calificacion > 90)
console.log("Estudiante con mayor calificacion a 90:", calificacionMayores)


//// Ejercicio 4: Crear un nuevo array con el doble de edades usando map ////

const dobleEdad = estudiantes.map(valor => {
    return {
        ...valor,
        edad: valor.edad * 2
    } 
})
console.log(dobleEdad)


//// Ejercicio 5: Calcular el promedio de calificaciones usando reduce ////

const totalCalificaciones = estudiantes.reduce((acumulador, estudiante) => 
acumulador + estudiante.calificacion, 0);

const promedioCalificaciones = totalCalificaciones / estudiantes.length;
console.log("Promedio de calificaciones:", promedioCalificaciones);

//// Ejercicio 6: Obtener el tercer y cuarto estudiante usando slice ////

const tercer_cuarto = estudiantes.slice(2, 4)
console.log("tercer y cuarto estudiante:", tercer_cuarto)