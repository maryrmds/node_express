const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded ({
    extended: true
}))

 // GET E POST
app.post('/cadastrar/salvar', (requisicao, resposta) => {
    console.log(requisicao.body)
})

app.get('/cadastrar', (requisicao, resposta) => {
    resposta.sendFile('${caminhoBase}/cadastro.html')
})

 // https://localhost:3000/usuarios/
app.get('/usuarios/:identificador', (requisicao, resposta) => {

    const id = require.params.id
    
    console.log('Acessando dados do usuário ${identificador}')

    resposta.sendFile('${caminhoBase}/usuarios.html')
})

 // https://localhost:3000
app.get ('/', (requisicao, resposta) => {
    resposta.sendFile('${caminhoBase}/index.html')
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})

 