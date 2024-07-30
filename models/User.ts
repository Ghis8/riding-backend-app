import mongoose, { Schema } from "mongoose";

const Role=["Driver","Customer"]

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First name required!"] 
    },
    lastName:{
        type:String,
        required:[true,"Last name required!"]
    },
    email:{
        type:String,
        required:[true,"Email address required!"],
        validate:{
            validator:(e:string)=>{
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())
            },
            message: (props:any) => `${props.value} is not a valid email address!`
        }
    },
    phoneNumber:{
        type:String,
        validate: {
            validator: function(v:string) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: (props:any) => `${props.value} is not a valid phone number!`
          },
          required: [true, 'User phone number required']
    },
    role:{
        type:String,
        enum:{
            values:Role,
            message:'{VALUE} is not supported as role'
        },
        required:[true,"User role is required!"]
    },
    password:{
        type:String,
        min:[6,'must be a least 6, got {VALUE}'],
        max:16,
        required:true
    },
    vehicle:{
        type:Schema.Types.ObjectId,
        require:isDriver
    }
})

function isDriver(){
    if(Role.indexOf('Driver')>-1){
        return true
    }else{
        return false
    }
}

export default mongoose.model('user',userSchema)