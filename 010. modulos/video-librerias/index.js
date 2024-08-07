// instalar axios (que es una libreria) para hacer llamadas a servicios externos

// npm i axios se ejecuta en la terminal para iinstalar,
// se crea una node_modules y una package-lock.json

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("sucess!!!!")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("error!!!!")
    console.log(error);
  })
  .finally(function () {
    // always executed
  });