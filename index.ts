import express,{ Express,Request,Response } from "express";
import dotenv from 'dotenv'

const app:Express=express()
const PORT=process.env.PORT || 4000
dotenv.config()


app.get("/",(req:Request,res:Response)=>{
    res.send("WELCOME TO THE RIDE APP")
})
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}; Press CTRL + C To Terminate`)
})