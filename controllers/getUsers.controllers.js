import User from "../models/users.model.js"
export const getUsers = async (req,res) =>{
   const users = await  User.find().select("_id")
   res.json(users)
}
