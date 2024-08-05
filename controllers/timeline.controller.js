import Tweet from "../models/tweets.model.js";

export const fetchTweets = async(req,res) =>{
    const userId = req.params.user_id;

    console.log("userid === >>> ", userId);
    if (!userId) {
        return res.status(400).send('User ID is missing');
      }
    try {
        const tweets = await Tweet.find({
             userId
        })
        
        res.status(200).send(tweets)
    } catch (error) {
        console.log(error);
    }
}
