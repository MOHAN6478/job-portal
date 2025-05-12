import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js';
dotenv.config();

//Intitialize express
const app = express()

//Connect to database
await connectDB()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res) => res.send("API Working"))
app.get('/debug-sentry',function mainHandler(req,res) {
    throw new Error("My first Sentry error!")
})
app.post('/webhooks',clerkWebhooks)

//Port 
const port = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app)

app.listen(port, () => console.log(`server is running on http://localhost:${port}`))