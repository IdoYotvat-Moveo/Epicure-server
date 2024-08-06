import { Router } from "express";
import * as restaurantController from '../controllers/restaurant.controller'
import authMiddleware from "../middlware/auth";

const restaurantRouter = Router()


/**
 * @api {get} /restaurants/ Get all restaurants
 * @apiName GetRestaurants
 * @apiGroup Restaurant
 *
 * @apiSuccess {Object[]} restaurants List of restaurants.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
        "_id": "669f8fdf2225a05cf11edbdb",
        "name": "Claro",
        "chef": "669f8fdf2225a05cf11edbd6",
        "image": "claro.png",
        "rating": 4,
        "dishes": [
            "669f8fdf2225a05cf11edbe2"
        ],
        "isPopular": true,
        "__v": 0
    }
 *     ]
 * @apiError RestaurantsNotFound restaurants was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 */
restaurantRouter.get('/', restaurantController.getRestaurants)

/**
 * @api {get} /restaurants/popular Get popular restaurants
 * @apiName GetPopularRestaurants
 * @apiGroup Restaurant
 *
 * @apiSuccess {Object[]} restaurants List of popular restaurants.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
        "_id": "669f8fdf2225a05cf11edbdb",
        "name": "Claro",
        "chef": "669f8fdf2225a05cf11edbd6",
        "image": "claro.png",
        "rating": 4,
        "dishes": [
            "669f8fdf2225a05cf11edbe2"
        ],
        "isPopular": true,
        "__v": 0
    }
 *     ]
 * @apiError RestaurantsNotFound restaurants was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 */
restaurantRouter.get('/popular', restaurantController.getPopularRestaurants)

/**
 * @api {get} /restaurants/:id Get restaurant by ID
 * @apiName GetRestaurantById
 * @apiGroup Restaurant
 *
 * @apiParam {Number} id Restaurant's unique ID.
 *
 * @apiSuccess {Object} restaurant Restaurant details.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "669f8fdf2225a05cf11edbdb",
        "name": "Claro",
        "chef": "669f8fdf2225a05cf11edbd6",
        "image": "claro.png",
        "rating": 4,
        "dishes": [
            "669f8fdf2225a05cf11edbe2"
        ],
        "isPopular": true,
        "__v": 0
    }
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RestaurantNotFound"
 *     }
 */
restaurantRouter.get('/:id', restaurantController.getResaurantById)

/**
 * @api {post} /restaurants/ Add a new restaurant
 * @apiName AddRestaurant
 * @apiGroup Restaurant
 *
 * @apiBody {String} name Name of the restaurant.
 *
 * @apiSuccess {Object} restaurant The newly created restaurant.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
        "_id": "669f8fdf2225a05cf11edbdb",
        "name": "Claro",
        "chef": "669f8fdf2225a05cf11edbd6",
        "image": "claro.png",
        "rating": 4,
        "dishes": [
            "669f8fdf2225a05cf11edbe2"
        ],
        "isPopular": true,
        "__v": 0
    }
 */
restaurantRouter.post('/',authMiddleware, restaurantController.addRestaurant)

/**
 * @api {put} /restaurants/:id Update a restaurant
 * @apiName UpdateRestaurant
 * @apiGroup Restaurant
 *
 * @apiParam {Number} id Restaurant's unique ID.
 * @apiBody {String} name Name of the restaurant.
 *
 * @apiSuccess {Object} restaurant The updated restaurant.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "669f8fdf2225a05cf11edbdb",
        "name": "Claro",
        "chef": "669f8fdf2225a05cf11edbd6",
        "image": "claro.png",
        "rating": 4,
        "dishes": [
            "669f8fdf2225a05cf11edbe2"
        ],
        "isPopular": true,
        "__v": 0
    }
 */
restaurantRouter.put('/:id',authMiddleware, restaurantController.updateRestaurant)

/**
 * @api {delete} /restaurants/:id Remove a restaurant
 * @apiName RemoveRestaurant
 * @apiGroup Restaurant
 *
 * @apiParam {Number} id Restaurant's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "669f8fdf2225a05cf11edbdb",
        "name": "Claro",
        "chef": "669f8fdf2225a05cf11edbd6",
        "image": "claro.png",
        "rating": 4,
        "dishes": [
            "669f8fdf2225a05cf11edbe2"
        ],
        "isPopular": true,
        "__v": 0
    }
 */
restaurantRouter.delete('/:id',authMiddleware, restaurantController.removeRestaurant)


export default restaurantRouter