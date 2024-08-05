import express from "express";
import dotenv from 'dotenv'
import { loginController, registerController } from "./controllers/auth.controller.js";
import connectDb from "./config/connectDb.js";
// import { createPostController, getPostsController } from "./controllers/posts.controller.js";
import tweetRouter from './routes/tweets.route.js'
import timelineRouter from './routes/timeline.route.js'

dotenv.config()

const app = express();
app.use(express.json())

app.post('/api/users/register', registerController)
app.post('/api/users/login', loginController)

app.use('/api/tweets', tweetRouter)

app.use('/api/users/:user_id/timeline', timelineRouter)


app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});


const connectDbAndStartServer = () =>{
  try {
    
    connectDb()
    app.listen(5500, () => {
      console.log("server is up at port 5500");
    });
  } catch (error) {
    console.log(error);
    process.exit(1)
    
    
  }
}

connectDbAndStartServer()