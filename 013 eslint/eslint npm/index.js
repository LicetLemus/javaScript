// este es el documento que vamos a utilizar

const nombre = "marta"

// eslint-disable
const nombre2 = "carla"

// desactivar reglas 
// en esta linea quiero tener comillas simples (desactivar en est alinea esa regla)

// eslint-enable

const text = 'me dijo que debia "estudiar mas"' // eslint-disable-line quotes

// eslint-disable-next-line quotes
const text2 = 'mas string'

console.log("hola")

const text3 = "esto es un error"

const tres = "julia"

// para rreglar todo los errores npm run lint-fix 
// revisar package.json los scripts