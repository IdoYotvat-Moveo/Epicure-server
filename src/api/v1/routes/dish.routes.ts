import { Router } from "express";
import * as dishController from '../controllers/dish.controller'

const dishRouter = Router()

dishRouter.get('/', dishController.getDishes)
dishRouter.get('/:id', dishController.getDishById)
dishRouter.post('/', dishController.addDish)
dishRouter.put('/:id', dishController.updateDish)
dishRouter.delete('/', dishController.removeDish)


export default dishRouter