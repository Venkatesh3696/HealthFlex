import express from 'express'
import { postTweet } from '../controllers/tweets.controller.js'
import { authenticate } from '../middlewares/authenticate.js'

const router = express.Router()

router.post('/', authenticate ,postTweet)

export default router
