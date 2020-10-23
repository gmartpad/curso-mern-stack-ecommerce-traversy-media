import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

//inicializa o .env
dotenv.config()

//realiza a conexão com o MongoDB
connectDB()

const importData = async () => {
    try {

        //deleteMany() sem argumento deleta tudo nas respectivas collections

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        //insertMany() com argumento insere as

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(products => {
            return {...products, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log(`Data Imported!`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        //deleteMany() sem argumento deleta tudo nas respectivas collections

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log(`Data Destroyed!`.red.inverse);
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

//node backend/seeder -d
if(process.argv[2] === '-d' ){
    destroyData()
}else{
    importData()
}