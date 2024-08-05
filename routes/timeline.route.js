import express from 'express'
import { fetchTweets } from '../controllers/timeline.controller.js'

const router = express.Router({ mergeParams: true })

router.get('/', fetchTweets);

export default router