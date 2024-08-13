"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurantController = __importStar(require("../controllers/restaurant.controller"));
const auth_1 = __importDefault(require("../middlware/auth"));
const restaurantRouter = (0, express_1.Router)();
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
restaurantRouter.get('/', restaurantController.getRestaurants);
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
restaurantRouter.get('/popular', restaurantController.getPopularRestaurants);
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
restaurantRouter.get('/:id', restaurantController.getResaurantById);
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
restaurantRouter.post('/', auth_1.default, restaurantController.addRestaurant);
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
restaurantRouter.put('/:id', auth_1.default, restaurantController.updateRestaurant);
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
restaurantRouter.delete('/:id', auth_1.default, restaurantController.removeRestaurant);
exports.default = restaurantRouter;
