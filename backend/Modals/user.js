const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');

const Joi = require('joi');

const passwordConplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

});

userSchema.methods.generateAuthToken = function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"1000d"})
    return token
}; 

const User = mongoose.model("user",userSchema);


const validate =(data)=>{
    const schema = Joi.object({
        Name:Joi.string().required().label("User Name"),
        email:Joi.string().email().required().label("Email"),
        password:passwordConplexity().required().label("Password")
    });
    return schema.validate(data)
};

module.exports = {User,validate};
