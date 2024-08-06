import { Router } from "express"
import * as userController from '../controllers/user.controller'


const userRouter = Router()

userRouter.get('/',userController.getUsers)
userRouter.post('/',userController.addUser)
userRouter.post('/login',userController.login)



export default userRouter
