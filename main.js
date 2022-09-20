
import express from 'express'

const app = express()

app.get('/', function (req, res) {
  console.log("passei aqui");
  res.send('Hello World')
})

app.get('/listaFuncionarios', function (req, res) {
  console.log("passei aqui com emoção");
  res.send('{ funcionario: "ana" }')
})

app.listen(3000)