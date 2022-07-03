import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDatabase from "./config/database.js";


dotenv.config()
connectDatabase()

// import routes
import blogRouter from './routes/blogRoutes.js'
import adminRouter from './routes/adminRoutes.js'

const app = express()

// middleware setup
app.use(cors())
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
app.use(express.json())

// route setup
app.use('/api/blog/',blogRouter)
app.use('/api/admin',adminRouter)


//port setup
app.listen(process.env.PORT,()=>console.log(`server run on port: ${process.env.PORT}`))