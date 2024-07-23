import { Router } from "express";
import * as restaurantController from '../controllers/restaurant.controller'

const restaurantRouter = Router()

restaurantRouter.get('/', restaurantController.getRestaurants)
restaurantRouter.get('/:id', restaurantController.getResaurantById)
restaurantRouter.post('/', restaurantController.addRestaurant)
restaurantRouter.put('/:id', restaurantController.updateRestaurant)
restaurantRouter.delete('/:id', restaurantController.removeRestaurant)


export default restaurantRouter