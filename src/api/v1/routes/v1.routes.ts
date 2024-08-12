import { Router } from "express"
import chefsRouter from "./chef.routes"
import dishRouter from "./dish.routes"
import restaurantRouter from "./restaurant.route"
import userRouter from "./user.routes"

const v1Router = Router()


v1Router.use('/chef', chefsRouter)
v1Router.use('/dish', dishRouter)
v1Router.use('/restaurant', restaurantRouter)
v1Router.use('/user',userRouter )

export default v1Router