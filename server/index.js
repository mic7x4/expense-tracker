import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import transactionRouter from './Routes/transactionsRoute.js';
import connectDB from '../server/config/db.js';
import bodyParser from 'body-parser';



dotenv.config({path: 'config/file.env'});
const app = express();
app.use(express.json())

// DB connection
connectDB();

const PORT = process.env.PORT || 8000;
app.use('/api/v1/transactions',transactionRouter);
app.listen(PORT,()=>console.log(`[!]: Server is Running in ${process.env.NODE_ENV} on Port ${PORT}`.cyan.bold));