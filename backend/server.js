import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

//inicializa o .env
dotenv.config()

//realiza a conexão com o MongoDB
connectDB()

//inicializa o express
const app = express()

//porta do servidor
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API tá rodando...')
})

app.use('/api/products', productRoutes)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))