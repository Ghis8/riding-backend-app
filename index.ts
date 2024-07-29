import express,{ Express,NextFunction,Request,Response } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import { Connect } from "./database";

const app:Express=express()
const PORT=process.env.PORT || 4000
dotenv.config()
app.use(express.json())
app.use(cors())

//database connection
Connect(`${process.env.MONGO_URI}`)



app.get("/api/v1",(req:Request,res:Response)=>{
    res.send("WELCOME TO THE RIDE APP")
})
app.use('/*',(req:Request,res:Response)=>{
    res.sendStatus(404)
})
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}; Press CTRL + C To Terminate`)
})