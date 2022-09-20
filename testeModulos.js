
// PADRÃO DE IMPORTAÇÃO CommomJS
//let { criaAna } = require('./modulo1.js')

//PADRÃO ES6
import criaAna from "./modulo2.js"

console.log("oi gente");


console.log(criaAna);

let p = criaAna()
p.fazAniversario()
p.imprime()