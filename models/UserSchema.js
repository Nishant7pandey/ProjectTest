const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required: true,
        default:""
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:String,
        required:true,
        default:""
    },
    emailAuthenticated:{
        type:Boolean,
        required: true,
    },
    picture: {type:String,required:true,default:"enter",required: true},
    country: {type:String,required:true,default:"enter",required: true},
    college: {type:String,required:true,default:"enter",required: true},
    state: {type:String,required:true,default:"enter",required: true},
})

module.exports = mongoose.model("user",UserSchema);