"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantService = void 0;
const chef_model_1 = require("../../../models/chef.model");
const restaurant_model_1 = require("../../../models/restaurant.model");
//CRUD
const getAllRestaurants = async () => {
    try {
        const restaurants = await restaurant_model_1.Restaurant.find()
            .populate('chef', 'name')
            .populate('dishes', 'title')
            .populate('signatureDish', 'title')
            .lean();
        return restaurants.map(restaurant => {
            delete restaurant.__v;
            return restaurant;
        });
    }
    catch (err) {
        console.log('restaurant service => error getting all restaurant');
        throw err;
    }
};
const getPopularRestaurants = async () => {
    try {
        const popularRestaurants = await restaurant_model_1.Restaurant.find({ isPopular: true }).populate('chef');
        if (!popularRestaurants.length) {
            throw new Error('No popular restaurants found');
        }
        return popularRestaurants.map(restaurant => {
            const restaurantObj = restaurant.toObject();
            delete restaurantObj.__v;
            return restaurantObj;
        });
    }
    catch (err) {
        console.log('restaurant service => error getting popular restaurants');
        console.error(err);
        throw err;
    }
};
const getRestaurantbyId = async (restaurantId) => {
    try {
        const restaurant = await restaurant_model_1.Restaurant.findById(restaurantId);
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        const restaurantObj = restaurant.toObject();
        delete restaurantObj.__v;
        return restaurantObj;
    }
    catch (err) {
        console.log('restaurant service => error getting restaurant by Id');
        throw err;
    }
};
const addRestaurant = async (restaurantData) => {
    try {
        const restaurant = new restaurant_model_1.Restaurant(restaurantData);
        const savedRestaurant = await restaurant.save();
        if (restaurantData.chef) {
            await chef_model_1.Chef.findByIdAndUpdate(restaurantData.chef, { $push: { restaurants: savedRestaurant._id } });
        }
        const restaurantObj = savedRestaurant.toObject();
        delete restaurantObj.__v;
        return restaurantObj;
    }
    catch (err) {
        console.log('restaurant service => error adding a restaurant', err);
        throw err;
    }
};
const updateRestaurant = async (restaurantId, updateData) => {
    try {
        if (updateData.chef) {
            await chef_model_1.Chef.findByIdAndUpdate(updateData.chef, { $push: { restaurants: restaurantId } });
        }
        const updatedRestaurant = await restaurant_model_1.Restaurant.findByIdAndUpdate(restaurantId, updateData, { new: true, runValidators: true });
        if (!updatedRestaurant) {
            throw new Error('Restaurant not found');
        }
        const restaurantObj = updatedRestaurant.toObject();
        delete restaurantObj.__v;
        return restaurantObj;
    }
    catch (err) {
        console.log('restaurant service => error updating a restaurant');
        throw err;
    }
};
const removeRestaurant = async (restaurantId) => {
    try {
        const restaurant = await restaurant_model_1.Restaurant.findById(restaurantId);
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        if (restaurant.chef) {
            await chef_model_1.Chef.findByIdAndUpdate(restaurant.chef, { $pull: { restaurants: restaurantId } });
        }
        return await restaurant_model_1.Restaurant.findByIdAndDelete(restaurantId);
    }
    catch (err) {
        console.log('restaurant service => error removing a restaurant', err);
        throw err;
    }
};
exports.restaurantService = {
    getAllRestaurants,
    getPopularRestaurants,
    getRestaurantbyId,
    addRestaurant,
    updateRestaurant,
    removeRestaurant
};
