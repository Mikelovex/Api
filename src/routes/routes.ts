import Router from 'express'
import PostController from '../controllers/PostController'
import UserController from '../controllers/UserController'

const routes = Router()


routes.post('/user', UserController.store)
routes.get('/users', UserController.getUsers)
routes.post('/userAuth', UserController.execute)
routes.get('/user', UserController.getUser)
routes.get('/posts', PostController.getUserPosts)
routes.post('/posts', PostController.store)

export default routes