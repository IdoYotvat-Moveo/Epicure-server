import { Types } from "mongoose";
import { Dish, IDish } from "../../../models/dish.model"
import { Restaurant } from "../../../models/restaurant.model"

//CRUD

const getAllDishesFromRestaurant = async (restaurantId: string) => {
    try {
        if (!Types.ObjectId.isValid(restaurantId)) {
            throw new Error('Invalid restaurant ID')
        }
        return await Dish.find({ restaurant: restaurantId, isActive: true })
    } catch (err) {
        console.error('dish service => error getting dishes from restaurant', err);
        throw err
    }
}

const getDishById = async (dishId: string) => {
    try {
        return await Dish.findById(dishId)
    } catch (err) {
        console.log('dish service => error getting dishe by id')
    }
}

const addDish = async (dishData: Partial<IDish>) => {
    try {
        const dish = new Dish(dishData)
        const savedDish = await dish.save()
        await Restaurant.findByIdAndUpdate(dishData.restaurant, { $push: { dishes: savedDish._id } })
        return savedDish
    } catch (err) {
        console.log('dish service => error adding dish')
    }
}

const updateDish = async (dishId: String, updateData: Partial<IDish>) => {
    try {
        return Dish.findByIdAndUpdate(dishId, updateData, { new: true, runValidators: true })
    } catch (err) {
        console.log('dish service => error updating dish')
    }
}

const removeDish = async (dishId: string) => {
    try {
        return await Dish.findByIdAndDelete(dishId)
    } catch (err) {
        console.log('dish service => error removing dish')
    }
}

export const dishService = {
    getAllDishesFromRestaurant,
    getDishById,
    addDish,
    updateDish,
    removeDish
}