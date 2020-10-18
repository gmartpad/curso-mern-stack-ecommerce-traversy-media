const express = require('express')
const products = require('./data/products')

//initializar o express
const app = express()

//porta do servidor
const port = 5000

app.get('/', (req, res) => {
    res.send('API tá rodando...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);

    res.json(product);
})

app.listen(port, console.log(`Servidor rodando na porta ${port}`))