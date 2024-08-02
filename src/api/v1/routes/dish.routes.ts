import { Router } from "express";
import * as dishController from '../controllers/dish.controller'

const dishRouter = Router()

/**
 * @api {get} /dish/ Get all dishes
 * @apiName GetDishes
 * @apiGroup Dish
 *
 *
 * @apiSuccess {Object[]} dishes List of dishes.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 *     ]
 */
dishRouter.get('/', dishController.getAllDishes)
/**
 * @api {get} /dish/restaurant/:id Get all dishes for a restaurant
 * @apiName GetDishes
 * @apiGroup Dish
 *
 * @apiParam {Number} id Restaurant's unique ID.
 *
 * @apiSuccess {Object[]} dishes List of dishes.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 *     ]
 */
dishRouter.get('/restaurant/:id', dishController.getDishes)

/**
 * @api {get} /dish/signature Get signature dish
 * @apiName GetSignatureDish
 * @apiGroup Dish
 *
 * @apiSuccess {Object} dish Signature dish details.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 */
dishRouter.get('/signature', dishController.getSignatureDish)

/**
 * @api {get} /dish/:id Get dish by ID
 * @apiName GetDishById
 * @apiGroup Dish
 *
 * @apiParam {Number} id Dish's unique ID.
 *
 * @apiSuccess {Object} dish Dish details.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 *
 * @apiError DishNotFound The id of the Dish was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DishNotFound"
 *     }
 */
dishRouter.get('/:id', dishController.getDishById)

/**
 * @api {post} /dish/ Add a new dish
 * @apiName AddDish
 * @apiGroup Dish
 *
 * @apiBody {String} name Name of the dish.
 *
 * @apiSuccess {Object} dish The newly created dish.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *      {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 *  @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RestaurantNotFound"
 *     }
 */
dishRouter.post('/', dishController.addDish)

/**
 * @api {put} /dish/:id Update a dish
 * @apiName UpdateDish
 * @apiGroup Dish
 *
 * @apiParam {Number} id Dish's unique ID.
 * @apiBody {String} name Name of the dish.
 *
 * @apiSuccess {Object} dish The updated dish.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 */
dishRouter.put('/:id', dishController.updateDish)

/**
 * @api {delete} /dish/:id Remove a dish
 * @apiName RemoveDish
 * @apiGroup Dish
 *
 * @apiParam {Number} id Dish's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Dish removed successfully."
 *     }
 * @apiError DishNotFound The id of the Dish was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
        "_id": "669f8fdf2225a05cf11edbe4",
        "title": "Smoked Pizza",
        "image": "smokedPizza.png",
        "ingredients": [
            "basil dough",
            "cashew \"butter\"",
            "demi-glace",
            "bison & radish"
        ],
        "price": 65,
        "restaurant": "669f8fdf2225a05cf11edbdd",
        "icons": [
            "vegan"
        ],
        "isActive": true,
        "__v": 0
    }
 */
dishRouter.delete('/:id', dishController.removeDish)


export default dishRouter