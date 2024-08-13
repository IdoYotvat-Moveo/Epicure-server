"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRestaurant = exports.updateRestaurant = exports.addRestaurant = exports.getResaurantById = exports.getPopularRestaurants = exports.getRestaurants = void 0;
const restaurant_service_1 = require("../services/restaurant.service");
const getRestaurants = async (req, res) => {
    try {
        const restaurant = await restaurant_service_1.restaurantService.getAllRestaurants();
        res.send(restaurant);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.getRestaurants = getRestaurants;
const getPopularRestaurants = async (req, res) => {
    try {
        const popularRestaurant = await restaurant_service_1.restaurantService.getPopularRestaurants();
        res.send(popularRestaurant);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.getPopularRestaurants = getPopularRestaurants;
const getResaurantById = async (req, res) => {
    try {
        const restaurant = await restaurant_service_1.restaurantService.getRestaurantbyId(req.params.id);
        if (!restaurant)
            return res.status(404).send('Restaurant not found');
        res.send(restaurant);
    }
    catch (err) {
        res.status(400);
    }
};
exports.getResaurantById = getResaurantById;
const addRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurant_service_1.restaurantService.addRestaurant(req.body);
        res.status(201).send(restaurant);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.addRestaurant = addRestaurant;
const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurant_service_1.restaurantService.updateRestaurant(req.params.id, req.body);
        if (!restaurant)
            return res.status(404).send('Restaurant not found');
        res.send(restaurant);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.updateRestaurant = updateRestaurant;
const removeRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurant_service_1.restaurantService.removeRestaurant(req.params.id);
        if (!restaurant)
            return res.status(404).send('Restaurant not found');
        res.send(restaurant);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.removeRestaurant = removeRestaurant;
