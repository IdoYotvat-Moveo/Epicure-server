import { Types } from "mongoose";
import { Dish, IDish } from "../../../models/dish.model"
import { Restaurant } from "../../../models/restaurant.model"

//CRUD

const getAllDishesFromRestaurant = async (restaurantId: string) => {
    try {
        if (!Types.ObjectId.isValid(restaurantId)) {
            throw new Error('Invalid restaurant ID')
        }
        const dishes = await Dish.find({ restaurant: restaurantId, isActive: true })
        return dishes.map(dish => {
            const dishObj = dish.toObject()
            delete dishObj.__v
            return dishObj
        })
    } catch (err) {
        console.error('dish service => error getting dishes from restaurant', err)
        throw err
    }
}

const getAllDishes = async () => {
    try {
        const dishes = await Dish.find().populate('restaurant', 'name').lean()
        return dishes.map(dish => {
            delete dish.__v
            return dish
        })
    } catch (err) {
        console.error('dish service => error getting dishes from restaurant', err)
        throw err
    }
}

const getDishById = async (dishId: string) => {
    console.log(dishId)
    try {
        return await Dish.findById(dishId)
    } catch (err) {
        console.log('dish service => error getting dish by id', err)
        throw err
    }
}

const addDish = async (dishData: Partial<IDish>) => {
    try {
        const restaurant = await Restaurant.findById(dishData.restaurant)
        //validation
        if (!restaurant) {
            throw new Error(`Restaurant with ID ${dishData.restaurant} does not exist`)
        }
        const dish = new Dish(dishData)
        const savedDish = await dish.save()
        await Restaurant.findByIdAndUpdate(dishData.restaurant, { $push: { dishes: savedDish._id } })
        return savedDish
    } catch (err) {
        console.log('dish service => error adding dish', err)
        throw err
    }
}

const getSignatureDish = async () => {
    try {
        const restaurants = await Restaurant.find().populate('signatureDish')
        const signatureDishes = restaurants
            .filter(restaurant => restaurant.signatureDish)
            .map(restaurant => restaurant.signatureDish)
        return signatureDishes
    } catch (err) {
        console.error('dish service => error getting signature dish', err)
        throw err
    }
}


const updateDish = async (dishId: String, updateData: Partial<IDish>) => {
    try {
        return Dish.findByIdAndUpdate(dishId, updateData, { new: true, runValidators: true })
    } catch (err) {
        console.log('dish service => error updating dish')
        throw err
    }
}

const removeDish = async (dishId: string) => {
    try {
        const dish = await Dish.findById(dishId)
        if (!dish) {
            throw new Error('Dish not found')
        }
        if (dish.restaurant) {
            await Restaurant.findByIdAndUpdate(dish.restaurant, { $pull: { dishes: dishId } })
        }
        return await Dish.findByIdAndDelete(dishId)
    } catch (err) {
        console.log('dish service => error removing dish', err)
        throw err
    }
}

export const dishService = {
    getAllDishes,
    getAllDishesFromRestaurant,
    getDishById,
    getSignatureDish,
    addDish,
    updateDish,
    removeDish
}