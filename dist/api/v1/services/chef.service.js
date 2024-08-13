"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefService = void 0;
const chef_model_1 = require("../../../models/chef.model");
const restaurant_model_1 = require("../../../models/restaurant.model");
//CRUD
const getAllChefs = async () => {
    try {
        const chefs = await chef_model_1.Chef.find().populate('restaurants', 'name');
        return chefs.map(chef => {
            const chefObj = chef.toObject();
            delete chefObj.__v;
            return chefObj;
        });
    }
    catch (err) {
        console.log('chef service => error getting chefs');
        throw err;
    }
};
const getChefByid = async (chefId) => {
    try {
        return await chef_model_1.Chef.findById(chefId);
    }
    catch (err) {
        console.log('chef service => error getting chef by Id');
        throw err;
    }
};
const getChefOfTheWeek = async () => {
    try {
        const chef = await chef_model_1.Chef.findOne({ isChefOfTheWeek: true }).populate('restaurants');
        if (!chef) {
            throw new Error('No chef found with isChefOfTheWeek set to true');
        }
        return chef;
    }
    catch (err) {
        console.log('chef service => error getting chef of the week');
        console.error(err);
        throw err;
    }
};
const addChef = async (chefData) => {
    try {
        const chef = new chef_model_1.Chef(chefData);
        const savedChef = await chef.save();
        const chefObj = savedChef.toObject();
        delete chefObj.__v;
        return chefObj;
    }
    catch (err) {
        console.log('chef service => error adding chef');
        throw err;
    }
};
const updateChef = async (chefId, updateData) => {
    try {
        const updatedChef = await chef_model_1.Chef.findByIdAndUpdate(chefId, updateData, { new: true, runValidators: true });
        if (!updatedChef) {
            throw new Error('Chef not found');
        }
        const chefObj = updatedChef.toObject();
        delete chefObj.__v;
        return chefObj;
    }
    catch (err) {
        console.log('chef service => error updating chef');
        throw err;
    }
};
const removeChef = async (chefId) => {
    try {
        const deletedChef = await chef_model_1.Chef.findByIdAndDelete(chefId);
        if (!deletedChef) {
            throw new Error('Chef not found');
        }
        await restaurant_model_1.Restaurant.updateOne({ chef: chefId }, { $set: { chef: null } });
        return deletedChef;
    }
    catch (err) {
        console.log('chef service => error removing chef', err);
        throw err;
    }
};
exports.chefService = {
    getAllChefs,
    getChefByid,
    getChefOfTheWeek,
    addChef,
    updateChef,
    removeChef
};
