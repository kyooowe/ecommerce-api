//#region Import
import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { AuthenticationRouter } from './src/routes/authentication/auth';
import { UserRouter } from './src/routes/user/user';
import cors from 'cors'
import bodyParser from 'body-parser'
//#endregion

//#region Configuration
dotenv.config()

const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//#endregion

//#region Mongoose
mongoose.connect('mongodb+srv://kyooowe:qwe1234@cluster0.pkajzc4.mongodb.net/ecommerce', () => {
    console.log('connected to database')
})
//#endregion

//#region Application

// Authentication
app.use('/api/authentication', AuthenticationRouter)

// User
app.use('/api/user', UserRouter)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
//#endregion

