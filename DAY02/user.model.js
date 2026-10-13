import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  //username: String,
  //email: String,
  //isActive: Boolean
// by defining objects we can define many properties
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,

  },
email : {
  type: String,
  required: true,
  
},
password: {
  type: String,
  required: [true,"password is required"]//can pass custom messages
}

},{timestamps: true}) //created at, updatedAt for fields

//makes schema in mongoDB

export const User=mongoose.model("User",userSchema) //.model is a method and takes two parameters what model to create and on what basis//User is saved as "users" in mongoDB database 