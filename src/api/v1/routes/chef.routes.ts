import { Router } from "express";
import * as chefController from '../controllers/chef.controller'

const chefsRouter = Router()


/**
 * @api {get} /chefs/ Get all chefs
 * @apiName GetChefs
 * @apiGroup Chef
 *
 * @apiSuccess {Object[]} chefs List of chefs.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *       {
            "_id": "669f8fdf2225a05cf11edbd6",
            "name": "Ran Shmueli",
            "bio": "Top chef in Tel Aviv",
            "image": "placeholder.png",
            "restaurants": [
                "669f8f4572daf397f3925f0f"
            ],
            "isChefOfTheWeek": false,
            "__v": 0
        }
 *    ]
 */
chefsRouter.get('/', chefController.getChefs)

/**
 * @api {get} /chefs/chefoftheweek Get Chef of the Week
 * @apiName GetChefOfTheWeek
 * @apiGroup Chef
 *
 * @apiSuccess {Object} Chef of the week.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "_id": "669f8fdf2225a05cf11edbd6",
            "name": "Ran Shmueli",
            "bio": "Top chef in Tel Aviv",
            "image": "placeholder.png",
            "restaurants": [
                "669f8f4572daf397f3925f0f"
            ],
            "isChefOfTheWeek": false,
            "__v": 0
        }
 */

chefsRouter.get('/chefoftheweek', chefController.getChefOfTheWeek)

/**
 * @api {get} /chefs/:id Get chef by ID
 * @apiName GetChefById
 * @apiGroup Chef
 *
 * @apiParam {Number} id Chef's unique ID.
 *
 * @apiSuccess {Object} chef Chef details.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "_id": "669f8fdf2225a05cf11edbd6",
            "name": "Ran Shmueli",
            "bio": "Top chef in Tel Aviv",
            "image": "placeholder.png",
            "restaurants": [
                "669f8f4572daf397f3925f0f"
            ],
            "isChefOfTheWeek": false,
            "__v": 0
        }
 *
 * @apiError ChefNotFound The id of the Chef was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ChefNotFound"
 *     }
 */
chefsRouter.get('/:id', chefController.getChefByid)

/**
 * @api {post} /chefs/ Add a new chef
 * @apiName AddChef
 * @apiGroup Chef
 *
 * @apiBody {String} name Name of the chef.
 *
 * @apiSuccess {Object} chef The newly created chef.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
            "_id": "669f8fdf2225a05cf11edbd6",
            "name": "Ran Shmueli",
            "bio": "Top chef in Tel Aviv",
            "image": "placeholder.png",
            "restaurants": [
                "669f8f4572daf397f3925f0f"
            ],
            "isChefOfTheWeek": false,
            "__v": 0
        }
 */

chefsRouter.post('/', chefController.addChef)

/**
 * @api {put} /chefs/:id Update a chef
 * @apiName UpdateChef
 * @apiGroup Chef
 *
 * @apiParam {Number} id Chef's unique ID.
 * @apiBody {String} name Name of the chef.
 *
 * @apiSuccess {Object} chef The updated chef.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "_id": "669f8fdf2225a05cf11edbd6",
            "name": "Ran Shmueli",
            "bio": "Top chef in Tel Aviv",
            "image": "placeholder.png",
            "restaurants": [
                "669f8f4572daf397f3925f0f"
            ],
            "isChefOfTheWeek": false,
            "__v": 0
        }
 */

chefsRouter.put('/:id', chefController.updateChef)

/**
 * @api {delete} /chefs/:id Remove a chef
 * @apiName RemoveChef
 * @apiGroup Chef
 *
 * @apiParam {Number} id Chef's unique ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
            "_id": "669f8fdf2225a05cf11edbd6",
            "name": "Ran Shmueli",
            "bio": "Top chef in Tel Aviv",
            "image": "placeholder.png",
            "restaurants": [
                "669f8f4572daf397f3925f0f"
            ],
            "isChefOfTheWeek": false,
            "__v": 0
        }
 */
chefsRouter.delete('/:id', chefController.removeChef)


export default chefsRouter