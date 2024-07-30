import mongoose, { Schema } from "mongoose";

const vehicleSchema=new mongoose.Schema({
    vehicleType:{
        type:String,
        require:[true,"Vehicle type required!"]
    },
    plateNumber:{
        type:String,
        require:[true,"Plate number of a vehicle required!"]
    },
    model:{
        type:String,
        require:[true,"Vehicle model required!"]
    },
    year:{
        type:String,
        require:[true,"Year of fabric required!"]
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
})

export default mongoose.model('vehicle',vehicleSchema)