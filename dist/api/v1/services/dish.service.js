"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishService = void 0;
const mongoose_1 = require("mongoose");
const dish_model_1 = require("../../../models/dish.model");
const restaurant_model_1 = require("../../../models/restaurant.model");
//CRUD
const getAllDishesFromRestaurant = async (restaurantId) => {
    try {
        if (!mongoose_1.Types.ObjectId.isValid(restaurantId)) {
            throw new Error('Invalid restaurant ID');
        }
        const dishes = await dish_model_1.Dish.find({ restaurant: restaurantId, isActive: true });
        return dishes.map(dish => {
            const dishObj = dish.toObject();
            delete dishObj.__v;
            return dishObj;
        });
    }
    catch (err) {
        console.error('dish service => error getting dishes from restaurant', err);
        throw err;
    }
};
const getAllDishes = async () => {
    try {
        const dishes = await dish_model_1.Dish.find().populate('restaurant', 'name').lean();
        return dishes.map(dish => {
            delete dish.__v;
            return dish;
        });
    }
    catch (err) {
        console.error('dish service => error getting dishes from restaurant', err);
        throw err;
    }
};
const getDishById = async (dishId) => {
    console.log(dishId);
    try {
        return await dish_model_1.Dish.findById(dishId);
    }
    catch (err) {
        console.log('dish service => error getting dish by id', err);
        throw err;
    }
};
const addDish = async (dishData) => {
    try {
        const restaurant = await restaurant_model_1.Restaurant.findById(dishData.restaurant);
        //validation
        if (!restaurant) {
            throw new Error(`Restaurant with ID ${dishData.restaurant} does not exist`);
        }
        const dish = new dish_model_1.Dish(dishData);
        const savedDish = await dish.save();
        await restaurant_model_1.Restaurant.findByIdAndUpdate(dishData.restaurant, { $push: { dishes: savedDish._id } });
        return savedDish;
    }
    catch (err) {
        console.log('dish service => error adding dish', err);
        throw err;
    }
};
const getSignatureDish = async () => {
    try {
        const restaurants = await restaurant_model_1.Restaurant.find().populate('signatureDish');
        const signatureDishes = restaurants
            .filter(restaurant => restaurant.signatureDish)
            .map(restaurant => restaurant.signatureDish);
        return signatureDishes;
    }
    catch (err) {
        console.error('dish service => error getting signature dish', err);
        throw err;
    }
};
const updateDish = async (dishId, updateData) => {
    try {
        return dish_model_1.Dish.findByIdAndUpdate(dishId, updateData, { new: true, runValidators: true });
    }
    catch (err) {
        console.log('dish service => error updating dish');
        throw err;
    }
};
const removeDish = async (dishId) => {
    try {
        const dish = await dish_model_1.Dish.findById(dishId);
        if (!dish) {
            throw new Error('Dish not found');
        }
        if (dish.restaurant) {
            await restaurant_model_1.Restaurant.findByIdAndUpdate(dish.restaurant, { $pull: { dishes: dishId } });
        }
        return await dish_model_1.Dish.findByIdAndDelete(dishId);
    }
    catch (err) {
        console.log('dish service => error removing dish', err);
        throw err;
    }
};
exports.dishService = {
    getAllDishes,
    getAllDishesFromRestaurant,
    getDishById,
    getSignatureDish,
    addDish,
    updateDish,
    removeDish
};
