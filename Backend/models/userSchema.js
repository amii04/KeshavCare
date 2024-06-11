import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    
    firstName:{
        type: String,
        required :true,
        minLength: [3,"First name should contain atleast 3 characters"],
    },
    lastName:{
        type: String,
        required :true,
        minLength: [3,"Last name should contain atleast 3 characters"],
    },
    email:{
        type: String,
        required :true,
        validate :[validator.isEmail, "Please enter a valid Email"],
    },
    phone:{
        type: String,
        required :true,
        minLength: [10,"Phone number must have exact 10 digits"],
        maxLength: [10,"Phone number must have exact 10 digits"],
    },
    nic:{
        type: String,
        required :true,
        minLength: [5,"NIC must contain exact 5 digits"],
        maxLength: [5,"NIC must contain exact 5 digits"],
    },       
    dob:{
        type:Date,
        required:[true,"DOB is mandatory!"],
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"],
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"password must contain atleast 8 character!"],
        select:false,
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Patient","Doctor"],
    },
    doctorDepartment:{
        type:String,
    },
    docAvatar:{
        pubic_id:String,
        url: String,
    },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`Password hashed for user ${this.email}`);
    next();
  });

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)  
};
userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    });

};


export const User = mongoose.model("User", userSchema);