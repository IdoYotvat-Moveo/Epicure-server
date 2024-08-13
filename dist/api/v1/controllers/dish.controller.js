"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDish = exports.updateDish = exports.addDish = exports.getSignatureDish = exports.getDishById = exports.getDishes = exports.getAllDishes = void 0;
const dish_service_1 = require("../services/dish.service");
const getAllDishes = async (req, res) => {
    try {
        const dishes = await dish_service_1.dishService.getAllDishes();
        res.send(dishes);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.getAllDishes = getAllDishes;
const getDishes = async (req, res) => {
    try {
        const dish = await dish_service_1.dishService.getAllDishesFromRestaurant(req.params.id);
        res.send(dish);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.getDishes = getDishes;
const getDishById = async (req, res) => {
    try {
        const dish = await dish_service_1.dishService.getDishById(req.params.id);
        if (!dish)
            return res.status(404).send('Dish not found');
        res.send(dish);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.getDishById = getDishById;
const getSignatureDish = async (req, res) => {
    try {
        const signatureDishes = await dish_service_1.dishService.getSignatureDish();
        if (!signatureDishes || !signatureDishes.length)
            return res.status(404).send('Dish not found');
        res.send(signatureDishes);
    }
    catch (err) {
        console.error('dish service => error getting signature dish', err);
        res.status(400).send(err);
    }
};
exports.getSignatureDish = getSignatureDish;
const addDish = async (req, res) => {
    try {
        const dish = await dish_service_1.dishService.addDish(req.body);
        res.status(201).send(dish);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.addDish = addDish;
const updateDish = async (req, res) => {
    try {
        const dish = await dish_service_1.dishService.updateDish(req.params.id, req.body);
        if (!dish)
            return res.status(404).send('Dish not found');
        res.send(dish);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.updateDish = updateDish;
const removeDish = async (req, res) => {
    try {
        const dish = await dish_service_1.dishService.removeDish(req.params.id);
        if (!dish)
            return res.status(404).send('Dish not found');
        res.send(dish);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.removeDish = removeDish;
