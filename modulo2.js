
//PADRÃO ES6

export default function() {

    let pessoa = {
        nome: "Ana",
        idade: 23,
        cod: 888888,

        fazAniversario() {
            this.idade++
        },

        imprime() {
            console.log("sou " + this.nome + " e tenho " + this.idade + " anos");
        }
    }
    return pessoa
}