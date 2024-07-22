import { Dish } from "../../../models/dish.model"

//CRUD

//todo ask populate??
const getAllDishes = async () => {
    try {
        return await Dish.find()
    } catch (err) {
        console.log('dish service => error getting all dishes')
    }
}

const getDishById = async (dishId: string) => {
    try {
        return await Dish.findById(dishId)
    } catch (err) {
        console.log('dish service => error getting dishe by id')
    }
}

const addDish = async (dishData: typeof Dish) => {
    try {
        const dish = new Dish(dishData)
        return await dish.save()
    } catch (err) {
        console.log('dish service => error adding dish')
    }
}

const updateDish = async (dishId: String, updateData: typeof Dish) => {
    try {
        return Dish.findByIdAndUpdate(dishId, updateData, { new: true, runValidators: true })
    } catch (err) {
        console.log('dish service => error updating dishe')
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
    getAllDishes,
    getDishById,
    addDish,
    updateDish,
    removeDish
}