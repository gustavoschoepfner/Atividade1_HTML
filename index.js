//navegador

/*
const http = require('http'); //require importa módulos do Node

const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello World!');
});

server.listen(3000, function() {
    console.log('Servidor escutando na porta 3000');
});
*/

/*
//Terminal

console.log("Hello World")
*/

// Usando Lib Express (e outros testes)

import express from 'express'

const app = express()

app.use(express.json());

app.get("/api/soma", (req, res) => { //usar parametros de requisição e resposta é necessário
    console.log("Hello World") //executa tudo aqui quando recebe a requisição

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    // uma requisição, só permite uma resposta
    // não adicionar uma resposta a uma requisição é prática porca
    res.send({soma: num1+num2})
})

// cada um desses é uma api?
app.get("/api/sub/:num1/:num2", (req, res) => {
    /* o endpoint geralment é nomeado o mesmo ("api")
     e o próximo nome é o versionamento da api (nesse caso nao temos).
     ":" significa que vai passar um parâmetro na URL (que pode ser lida no query) */

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({soma: num1-num2})
   
})

app.get("/api/ex2/:horas/:valorHora", (req, res) => {

    const horas = Number(req.params.horas)
    const valorHora = Number(req.params.valorHora)

    res.send({salario: horas*valorHora})
   
})

app.get("/api/ex3/:p1/:p2/:p3/:p4/:p5", (req, res) => {

    const p1 = Number(req.params.p1)
    const p2 = Number(req.params.p2)
    const p3 = Number(req.params.p3)
    const p4 = Number(req.params.p4)
    const p5 = Number(req.params.p5)

    res.send({média: (p1+p2+p3+p4+p5)/5})
   
})

app.get("/api/ex4/:celsius", (req, res) => {

    const celsius = Number(req.params.celsius)

    res.send({Fahrenheit: (9 * celsius + 160) / 5})
   
})

app.post("/api/ex5", (req, res) => {

    const milha = Number(req.body.milha)

    res.send({Quilômetros: milha*1.60934})
   
})

app.listen(3000, () => { //inicia o servidor
    console.log("servidor rodando na porta 3000")
})