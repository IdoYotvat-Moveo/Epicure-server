"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.addUser = exports.getUsers = void 0;
const user_service_1 = require("../services/user.service");
const getUsers = async (req, res) => {
    try {
        const users = await user_service_1.userService.getAllUsers();
        res.send(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.getUsers = getUsers;
const addUser = async (req, res) => {
    try {
        const user = await user_service_1.userService.addUser(req.body);
        res.status(201).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.addUser = addUser;
const login = async (req, res) => {
    try {
        const user = await user_service_1.userService.login(req.body.mail, req.body.password);
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
};
exports.login = login;
