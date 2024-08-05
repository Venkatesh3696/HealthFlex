import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    text: {
         type: String,
          required: true 
        },
  },
  { collection: "tweets", timestamps:true }
);
const Tweet = mongoose.model("Tweet", TweetSchema);

export default Tweet

