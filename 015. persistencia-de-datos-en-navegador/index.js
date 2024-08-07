// localStorage.setItem("nombre", "Licet")
// para cambiar el nombre
// localStorage.setItem("nombre", "Lemus")

// obtener un valor 
// console.log(localStorage.getItem("nombre"))

// en el local storage podemos guardar lo que queramos

localStorage.setItem("persona",  JSON.stringify({nombre:"carla", apellido: "Martinez", edad: 33})) 

// console.log(JSON.parse(localStorage.getItem("persona"))) // para obtenerlo como objeto JSON.parse

// JSON.stringify --> convierte un objeto/array en string
// JSON.parse --> convierte ub objeto/array convertifo a traves de stringfy en un objeto de javascript

// eliminar un item de localStorage

localStorage.removeItem("nombre")


/////// sesionStorage; lo mismo que el anterior, solo que no se puede tener acceso en todas las pestañas

sessionStorage.setItem("nombre-sesion", "licet")


///////  cookies
// se accede a traves de document.cookies

document.cookie = "nombreCookie=LicetCookie" // como agregar

// darle caducidad a la cookie
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2024, 4, 1).toUTCString()

console.log(document.cookie)

