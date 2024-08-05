import Tweet from "../models/tweets.model.js";

export const postTweet = async (req,res) =>{
    console.log('posting');
    
    try {
        const {text} = req.body;

        await Tweet.create({
            text:text,
            userId :req.id
        })
        res.status(201).json({message:"Tweet posted successfully"})
        
    } catch (error) {
        console.log(error);
        
    }
}

