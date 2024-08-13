"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChef = exports.updateChef = exports.addChef = exports.getChefOfTheWeek = exports.getChefByid = exports.getChefs = void 0;
const chef_service_1 = require("../services/chef.service");
const getChefs = async (req, res) => {
    try {
        const chefs = await chef_service_1.chefService.getAllChefs();
        res.send(chefs);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.getChefs = getChefs;
const getChefByid = async (req, res) => {
    try {
        const chef = await chef_service_1.chefService.getChefByid(req.params.id);
        if (!chef)
            return res.status(404).send('Chef not found');
        res.send(chef);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.getChefByid = getChefByid;
const getChefOfTheWeek = async (req, res) => {
    try {
        const chef = await chef_service_1.chefService.getChefOfTheWeek();
        if (!chef)
            return res.status(404).send('Chef of the week not found');
        res.send(chef);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.getChefOfTheWeek = getChefOfTheWeek;
const addChef = async (req, res) => {
    try {
        const chef = await chef_service_1.chefService.addChef(req.body);
        res.status(201).send(chef);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.addChef = addChef;
const updateChef = async (req, res) => {
    try {
        const chef = await chef_service_1.chefService.updateChef(req.params.id, req.body);
        if (!chef)
            return res.status(404).send('chef not found');
        res.send(chef);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.updateChef = updateChef;
const removeChef = async (req, res) => {
    try {
        const chef = await chef_service_1.chefService.removeChef(req.params.id);
        if (!chef)
            return res.status(404).send('chef not found');
        res.send(chef);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.removeChef = removeChef;
