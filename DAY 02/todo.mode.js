import mongogoose from "mongoose"

const todoSchema=new mongogoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete:{
    type: Boolean,
    default: false,
  },
  createdBy:{
    //reference
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtodo", 
    }
  ]//array of subtodos
},{timestamps: true})

export const Todo=mongogoose.model("Todo",todoSchema)