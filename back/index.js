import express from 'express'
import db from './repository/index.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//CRUD

//CREATE

app.post("/api/v1/pessoa", (req, res) => {
    const {id, cpf, email} = req.body

    if(!id || !cpf || !email){
        res.send({ message: "é necessário enviar tudo."})
        return // Pra que?
    }

    db.push({id,cpf,email})
    res.send({ message: "Pessoa criada com sucesso."})
})

//READ

app.get("/api/v1/pessoa/:id", (req, res) => { 
    res.send({ pessoas: db})
})

//UPDATE

app.put("/api/v1/pessoa/:id", (req, res) => { 
    const id = req.params.id
    const { name } = req.body
    const pessoa = db.find(it => it.id == id) 

    if(!pessoa) {
        res.send({ message: "Favor informar id."})
        return
    }

    pessoa.name = name
    res.send({ message: "Pessoa alterada com sucesso."})
})

//DELETE

app.delete("/api/v1/pessoa/:id", (req, res) => {
    const id = req.params.id
    const index = db.findIndex(it => it.id == id)

    if (index === -1){
        return res.status(404).send({ message: "Pessoa não encontrada."})
    }

    db.splice(index, 1)

    res.send({ message: "Pessoa deletada com sucesso."})
})

//inicia o servidor

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})