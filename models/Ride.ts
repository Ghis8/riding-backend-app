import mongoose, { Schema } from "mongoose";

const tripSchema=new mongoose.Schema({
    origin:{
        latitude:{
            type:Boolean,
            required:[true,"origin (latitude) required"] 
        },
        longitude:{
            type:Boolean,
            required:[true,"origin (longitude) required!"]
        }
    },
    destination:{
        latitude:{
            type:Boolean,
            required:[true,"origin (latitude) required"] 
        },
        longitude:{
            type:Boolean,
            required:[true,"origin (longitude) required!"]
        }
    },
    range:{
        type:Boolean,
        required:[true,"trip distance required!"]
    },
    price:{
        type:Boolean,
        required:[true,"trip price required!"]
    },
    customer:{
        type:Schema.Types.ObjectId      
    },

})

export default mongoose.model('trip',tripSchema)