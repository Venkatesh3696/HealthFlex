import User from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registerController =  async (req, res) => {
  const {  email, password } = req.body;
  
  
  try {
    const user = await User.findOne({email : email})
    if (!user) {      
      const hashedPassword = await bcrypt.hash(password ,10)
      const newUser = await User.create({
        email,
        password: hashedPassword,
      });
      console.log(newUser);
      res.send({ status: "ok" , message: "user created"});
    } else {
      res.send({message : "email already exists"})
    }
    
    } catch (error) {
    console.log(error);
    res.json({ satus: "error", error });
  }
};

export const loginController =  async (req, res) => {
  const {email, password } = req.body
  const user = await User.findOne({
    email: email,
  });
  
  try {
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
    if (isValidPassword) {
    const token =  jwt.sign(
      {
        userid : user._id,
      },
      process.env.JWT_SECRET, {expiresIn: "1h"}
    );

    return res.json({ status: "ok",  token, userId: user._id});
  } else {
    res.json({ status: "error", message :"invalidd password"});
  }
  }
  else{
    res.json({ status: "error", message :"email not found"});
  }
} catch (error) {
  console.log(error);
}
};
