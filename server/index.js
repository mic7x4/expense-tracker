import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';


dotenv.config({path: 'file.env'});

const app = express();
const PORT = process.env.PORT || 8000;
app.get('/',(req,res)=>{
    console.log('Done');
})

app.listen(PORT,()=>console.log(`[!]: Server is Running in ${process.env.NODE_ENV} on Port ${PORT}`));