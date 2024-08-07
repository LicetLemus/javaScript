// funciones generadoras: se agrega *

function* generaId() {
  let Id = 0;
  while (true) {
    Id++;
    if (Id === 10) {
      return Id;
    }
    yield Id; // especie de return, no sale directamente de la funcion, se queda esperando hasta que se vuvla a llamar
  }
}

const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
