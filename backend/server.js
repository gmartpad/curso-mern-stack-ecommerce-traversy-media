const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

//inicializa o .env
dotenv.config()

//initializar o express
const app = express()

//porta do servidor
const PORT = process.env.PORT || 5000

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

app.listen(PORT, console.log(`Servidor rodando no modo de ${process.env.NODE_ENV} na porta ${process.env.PORT}`))