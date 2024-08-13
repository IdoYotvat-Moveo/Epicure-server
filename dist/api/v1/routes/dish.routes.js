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
const dishController = __importStar(require("../controllers/dish.controller"));
const auth_1 = __importDefault(require("../middlware/auth"));
const dishRouter = (0, express_1.Router)();
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
dishRouter.get('/', dishController.getAllDishes);
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
dishRouter.get('/restaurant/:id', dishController.getDishes);
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
dishRouter.get('/signature', dishController.getSignatureDish);
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
dishRouter.get('/:id', dishController.getDishById);
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
dishRouter.post('/', auth_1.default, dishController.addDish);
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
dishRouter.put('/:id', auth_1.default, dishController.updateDish);
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
dishRouter.delete('/:id', auth_1.default, dishController.removeDish);
exports.default = dishRouter;
