import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

//inicializa o .env
dotenv.config()

//realiza a conexão com o MongoDB
connectDB()

//inicializa o express
const app = express()

app.get('/', (req, res) => {
    res.send('API tá rodando...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

//porta do servidor
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))