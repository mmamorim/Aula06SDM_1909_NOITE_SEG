// ES6
import faker from "faker-br"

console.log("algo");

let cpf = faker.br.cpf();
let pais = faker.address.country()

console.log("cpf: ",cpf);
console.log("pais: ",pais);