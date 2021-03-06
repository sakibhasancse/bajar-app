import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectionDb from './db/dbConnect'


const app = express()
dotenv.config()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

import Product from './routers/product'
import User from './routers/user'
import Category from './routers/category'
app.use('/api', Product)
app.use('/api', User)
app.use('/api', Category)

const url = process.env.DB_URL
connectionDb(url)

export default app