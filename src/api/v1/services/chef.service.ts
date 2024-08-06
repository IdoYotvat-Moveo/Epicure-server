import { Chef, IChef } from "../../../models/chef.model"
import { Restaurant } from "../../../models/restaurant.model"

//CRUD

const getAllChefs = async () => {
    try {
        const chefs = await Chef.find().populate('restaurants', 'name')
        return chefs.map(chef => {
            const chefObj = chef.toObject()
            delete chefObj.__v
            return chefObj
        })
    } catch (err) {
        console.log('chef service => error getting chefs')
        throw err
    }
}

const getChefByid = async (chefId: string) => {
    try{
        return await Chef.findById(chefId)
    } catch(err) {
        console.log('chef service => error getting chef by Id')
        throw err
    }
}

const getChefOfTheWeek = async () => {
    try {
        const chef = await Chef.findOne({ isChefOfTheWeek: true }).populate('restaurants')
        if (!chef) {
            throw new Error('No chef found with isChefOfTheWeek set to true')
        }
        return chef
    } catch (err) {
        console.log('chef service => error getting chef of the week')
        console.error(err)
        throw err
    }
}

const addChef = async (chefData: Partial<IChef>) => {
    try {
        const chef = new Chef(chefData)
        const savedChef = await chef.save()
        const chefObj = savedChef.toObject()
        delete chefObj.__v
        return chefObj
    } catch (err) {
        console.log('chef service => error adding chef')
        throw err
    }
}

const updateChef = async (chefId: string, updateData: Partial<IChef>) => {
    try {
        const updatedChef = await Chef.findByIdAndUpdate(chefId, updateData, { new: true, runValidators: true })
        if (!updatedChef) {
            throw new Error('Chef not found')
        }
        const chefObj = updatedChef.toObject()
        delete chefObj.__v
        return chefObj
    } catch (err) {
        console.log('chef service => error updating chef')
        throw err
    }
}

const removeChef = async (chefId: string) => {
    try {
        const deletedChef = await Chef.findByIdAndDelete(chefId)
        if (!deletedChef) {
            throw new Error('Chef not found')
        }
        await Restaurant.updateOne({ chef: chefId }, { $set: { chef: null } })
        return deletedChef
    } catch (err) {
        console.log('chef service => error removing chef', err)
        throw err
    }
}


export const chefService = {
    getAllChefs,
    getChefByid,
    getChefOfTheWeek,
    addChef,
    updateChef,
    removeChef
}