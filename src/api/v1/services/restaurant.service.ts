import { Chef } from "../../../models/chef.model"
import { IRestaurant, Restaurant } from "../../../models/restaurant.model"

//CRUD

const getAllRestaurants = async () => {
    try {
        return await Restaurant.find()
    } catch (err) {
        console.log('restaurant service => error getting all restaurant')
        throw err
    }
}

const getPopularRestaurants = async () => {
    try {
        const popularRestaurants = await Restaurant.find({ isPopular: true })
        if (!popularRestaurants.length) {
            throw new Error('No popular restaurants found')
        }
        return popularRestaurants
    } catch (err) {
        console.log('restaurant service => error getting popular restaurants')
        console.error(err);
        throw err;
    }
}

const getRestaurantbyId = async (restaurantId: string) => {
    try {
        return await Restaurant.findById(restaurantId)
    } catch (err) {
        console.log('restaurant service => error getting restaurant by Id')
        throw err
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
        throw err
    }
}

const updateRestaurant = async (restaurantId: string, updateData: Partial<IRestaurant>) => {
    try {
        if (updateData.chef) {
            await Chef.findByIdAndUpdate(updateData.chef, { $push: { restaurants: restaurantId } })
        }
        return await Restaurant.findByIdAndUpdate(restaurantId, updateData, { new: true, runValidators: true })
    } catch (err) {
        console.log('restaurant service => error updating a restaurant')
        throw err
    }
}

const removeRestaurant = async (restaurantId: string) => {
    try {
        const restaurant = await Restaurant.findById(restaurantId)
        if (!restaurant) {
            throw new Error('Restaurant not found')
        }
        if (restaurant.chef) {
            await Chef.findByIdAndUpdate(restaurant.chef, { $pull: { restaurants: restaurantId } })
        }
        return await Restaurant.findByIdAndDelete(restaurantId)
    } catch (err) {
        console.log('restaurant service => error removing a restaurant', err)
        throw err
    }
}

export const restaurantService = {
    getAllRestaurants,
    getPopularRestaurants,
    getRestaurantbyId,
    addRestaurant,
    updateRestaurant,
    removeRestaurant
}


