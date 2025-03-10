const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true})
const model=mongoose.model(schema)
module.exports=model
