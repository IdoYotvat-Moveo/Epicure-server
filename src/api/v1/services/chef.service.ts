import { Chef, IChef } from "../../../models/chef.model"

//CRUD

const getAllChefs = async () => {
    try {
        return await Chef.find()
    } catch (err) {
        console.log('chef service => error getting chefs')
    }
}

const getChefByid = async (chefId: string) => {
    try{
        return await Chef.findById(chefId)
    } catch(err) {
        console.log('chef service => error getting chef by Id')
    }
}

const addChef = async (chefData: Partial<IChef>) => {
    try{
        const chef = new Chef(chefData)
        return await chef.save()
    } catch(err) {
        console.log('chef service => error adding chef')
    }
}

const updateChef = async (chefId: string, updateData: Partial<IChef>) => {
    try{
        return Chef.findByIdAndUpdate(chefId, updateData, { new: true, runValidators: true })
    } catch(err) {
        console.log('chef service => error updating chef')
    }
}

const removeChef = async (chefId: string) => {
    try{
        return await Chef.findByIdAndDelete(chefId)
    } catch(err) {
        console.log('chef service => error removing chef')
    }
}


export const chefService = {
    getAllChefs,
    getChefByid,
    addChef,
    updateChef,
    removeChef
}