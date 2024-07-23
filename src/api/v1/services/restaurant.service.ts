import { Chef } from "../../../models/chef.model"
import { IRestaurant, Restaurant } from "../../../models/restaurant.model"

//CRUD

const getAllRestaurants = async () => {
    try {
        return await Restaurant.find()
    } catch (err) {
        console.log('restaurant service => error getting all restaurant')
    }
}

const getRestaurantbyId = async (restaurantId: string) => {
    try {
        return await Restaurant.findById(restaurantId)
    } catch (err) {
        console.log('restaurant service => error getting restaurant by Id')
    }
}

const addRestaurant = async (restaurantData: Partial<IRestaurant>) => {
    try {
        const restaurant = new Restaurant(restaurantData)
        const savedRestaurant = await restaurant.save()
        if (restaurantData.chef) {
            await Chef.findByIdAndUpdate(restaurantData.chef, { $push: { restaurants: savedRestaurant._id } })
        }
        return savedRestaurant
    } catch (err) {
        console.log('restaurant service => error adding a restaurant')
    }
}

const updateRestaurant = async (restaurantId: string, updateData: Partial<IRestaurant>) => {
    try {
        return await Restaurant.findByIdAndUpdate(restaurantId, updateData, { new: true, runValidators: true })
    } catch (err) {
        console.log('restaurant service => error updating a restaurant')
    }
}

const removeRestaurant = async (restaurantId: string) => {
    try {
        return await Restaurant.findByIdAndDelete(restaurantId)
    } catch (err) {
        console.log('restaurant service => error removing a restaurant')
    }
}

export const restaurantService = {
    getAllRestaurants,
    getRestaurantbyId,
    addRestaurant,
    updateRestaurant,
    removeRestaurant
}


