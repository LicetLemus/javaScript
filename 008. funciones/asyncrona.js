// funciones asincronas y promesas

function miAsinc() {
    // hace una llamada a una base de datos externa
    // puede darnos algun error
}

// PROMESA: 

const miPromesa = new Promise((resolve, reject) => {
    // si está todo correcto
    if (true) {
        resolve()
    } else {
        reject()
    }
}) 

// como consumir las promesas 
// 1. .then()
miPromesa
    .then(() => console.log("se ha ejecutado exitosamente"))

// 2. .catch(): saber y gestionar los errores dentro de la promesa
    .catch(() => console.log("error"))

// 3. .finally()
    .finally(()=> console.log("siempre me ejecuto"))

////// ejemplo



