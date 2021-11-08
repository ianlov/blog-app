import { Router } from 'express'
import * as controllers from '../controllers/posts.js'

const router = Router()

router.get('/', controllers.getRoot)
router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.put('/posts/:id', controllers.updatePost)
router.post('/posts', controllers.createPost)
router.delete('/posts/:id', controllers.deletePost)


export default router