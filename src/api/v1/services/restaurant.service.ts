import { Chef } from "../../../models/chef.model"
import { IRestaurant, Restaurant } from "../../../models/restaurant.model"

//CRUD

const getAllRestaurants = async () => {
    try {
        const restaurants = await Restaurant.find()
            .populate('chef', 'name')
            .populate('dishes', 'title')
            .populate('signatureDish', 'title')
            .lean()
        return restaurants.map(restaurant => {
            delete restaurant.__v
            return restaurant
        })
    } catch (err) {
        console.log('restaurant service => error getting all restaurant')
        throw err
    }
}

const getPopularRestaurants = async () => {
    try {
        const popularRestaurants = await Restaurant.find({ isPopular: true }).populate('chef')
        if (!popularRestaurants.length) {
            throw new Error('No popular restaurants found')
        }
        return popularRestaurants.map(restaurant => {
            const restaurantObj = restaurant.toObject()
            delete restaurantObj.__v
            return restaurantObj
        })
    } catch (err) {
        console.log('restaurant service => error getting popular restaurants')
        console.error(err)
        throw err
    }
}

const getRestaurantbyId = async (restaurantId: string) => {
    try {
        const restaurant = await Restaurant.findById(restaurantId)
        if (!restaurant) {
            throw new Error('Restaurant not found')
        }
        const restaurantObj = restaurant.toObject()
        delete restaurantObj.__v
        return restaurantObj
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
        const restaurantObj = savedRestaurant.toObject()
        delete restaurantObj.__v
        return restaurantObj
    } catch (err) {
        console.log('restaurant service => error adding a restaurant', err)
        throw err
    }
}

const updateRestaurant = async (restaurantId: string, updateData: Partial<IRestaurant>) => {
    try {
        if (updateData.chef) {
            await Chef.findByIdAndUpdate(updateData.chef, { $push: { restaurants: restaurantId } })
        }
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, updateData, { new: true, runValidators: true })
        if (!updatedRestaurant) {
            throw new Error('Restaurant not found')
        }
        const restaurantObj = updatedRestaurant.toObject()
        delete restaurantObj.__v
        return restaurantObj
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


