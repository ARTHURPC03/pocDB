import { Router } from 'express'
import UsersControllers from '../controllers/UsersController'

const usersControllers = new UsersControllers()

const routes = Router()

routes.post('/users', usersControllers.create)
routes.get('/users', usersControllers.index)

export default routes
