import mongoose from "mongoose";

export function Connect(url:string){
    mongoose.connect(url)
    .then(()=>{
        console.log("Database connected successfully!")
    })
    .catch((error)=>{
        console.log("Unable to connect Database",error)
    })
}