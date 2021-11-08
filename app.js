import express from 'express'
import logger from 'morgan'

import postRoutes from './routes/posts.js'

const app = express();

app.use(express.json())
app.use(logger('dev'))

app.use('/api', postRoutes);

export default app

// May need to come back and change 'post' on line 11 based on the syntax