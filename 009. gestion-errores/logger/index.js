// en vez de utilizar console. podemos copiar winston en paguna web logger
// es una libreria para gestionar los registros

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // muestra los que estan por debajo de el - mirar logger en pag winstoon
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //en transports acciones que se ejecutan cada vez que hay un logger
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(), // me muestra en pantalla
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


module.exports = logger;