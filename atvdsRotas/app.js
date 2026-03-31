const express = require('express')
const app = express()
const port = 3000

// ROTA RAIZ
app.get('/', (req, res) => {
    console.log('acesso na rota raiz')
    res.send('Rota raiz')
    
})

// ROTA /ABOUT
app.get('/about', (req, res) => {
    res.send('Rota About')
})

// ROTA POST '/DATA'
app.post('/data', () => {
    console.log('acesso na rota /data')
    res.send('Rota /data')
})

// ROTAS USERS

app.get('/users', (req, res) => {
    res.redirect('/users/signup')
}) 

app.get('/users/signin', (req, res) => {
    console.log('Usuario na rota de loguin')
    res.send ('Forms para loguin')
})

app.get('/users/signup', (req, res) => {
    console.log('Usuario criando conta')
    res.send('crie sua conta')
})

app.get('/users/signin/:id', (req, res) => {
    console.log('Usuario Logou')
    const id = req.params.id
    res.send(`Bem vindo usuario ${id}`)
})

app.all('/*splat', (req, res) => {
    res.status(404).send('página não encontrada')
})
app.listen(port, () => {
    console.log('Server Rodando')    
})