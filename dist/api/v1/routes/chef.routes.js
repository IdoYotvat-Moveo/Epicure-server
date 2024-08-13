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
const chefController = __importStar(require("../controllers/chef.controller"));
const auth_1 = __importDefault(require("../middlware/auth"));
const chefsRouter = (0, express_1.Router)();
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
chefsRouter.get('/', chefController.getChefs);
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
chefsRouter.get('/chefoftheweek', chefController.getChefOfTheWeek);
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
chefsRouter.get('/:id', chefController.getChefByid);
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
chefsRouter.post('/', auth_1.default, chefController.addChef);
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
chefsRouter.put('/:id', auth_1.default, chefController.updateChef);
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
chefsRouter.delete('/:id', auth_1.default, chefController.removeChef);
exports.default = chefsRouter;
