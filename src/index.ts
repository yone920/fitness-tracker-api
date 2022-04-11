import express, { Application } from 'express';
import * as dotenv from 'dotenv';
const app: Application = express();
import authRouter from './routes/auth'
const connectDB = require('./config/db')
// dotenv.config({path: './config/config.env'});

//Connect to DB
connectDB();

//Middleware
app.use(express.json())

//Route Middlewares
app.use('/api/user', authRouter);

app.listen(5050, () => console.log("serving up"));

//Handle unhadled rejections
// process.on("unhandledRejection, (err, promise) => {
//   const message: String = err.message;
//   console.log(`Error: ${message}`)
//   server.close()
// })