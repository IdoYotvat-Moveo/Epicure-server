import { Router } from "express";
import * as dishController from '../controllers/dish.controller'

const dishRouter = Router()

dishRouter.get('/restaurant/:id', dishController.getDishes)
dishRouter.get('/signature', dishController.getSignatureDish)
dishRouter.get('/:id', dishController.getDishById)
dishRouter.post('/', dishController.addDish)
dishRouter.put('/:id', dishController.updateDish)
dishRouter.delete('/:id', dishController.removeDish)


export default dishRouter