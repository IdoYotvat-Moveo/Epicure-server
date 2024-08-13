"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_model_1 = require("../../../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const saltRounds = 10;
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;
const cryptoSecretKey = process.env.CRYPTO_KEY;
if (!secretKey) {
    throw new Error('Missing JWT_SECRET environment variable');
}
if (!cryptoSecretKey) {
    throw new Error('Missing CRYPTO_KEY environment variable');
}
const getAllUsers = async () => {
    try {
        const users = await user_model_1.User.find();
        return users;
    }
    catch (err) {
        console.log(' user service => error getting users');
        throw err;
    }
};
const addUser = async (userData) => {
    try {
        const isUserExist = await user_model_1.User.findOne({ mail: userData.mail });
        if (isUserExist) {
            throw new Error('user aleady exists!');
        }
        if (!userData.password) {
            throw new Error('Password is required');
        }
        const hashedPass = await bcrypt_1.default.hash(userData.password, saltRounds);
        userData.password = hashedPass;
        const user = new user_model_1.User(userData);
        const saveduser = await user.save();
        const userObj = saveduser.toObject();
        delete userObj.__v;
    }
    catch (err) {
        console.log('user service => error adding user');
        throw err;
    }
};
const login = async (mail, encryptedPassword) => {
    try {
        const user = await user_model_1.User.findOne({ mail });
        if (!user) {
            console.error("User not found with email:", mail);
            return null;
        }
        const bytes = crypto_js_1.default.AES.decrypt(encryptedPassword, cryptoSecretKey);
        const decryptedPassword = bytes.toString(crypto_js_1.default.enc.Utf8);
        const isMatch = await bcrypt_1.default.compare(decryptedPassword, user.password);
        if (isMatch) {
            const token = jsonwebtoken_1.default.sign({ id: user._id, name: user.name, role: user.role }, secretKey);
            return { user, token };
        }
        else {
            console.error("Password does not match for user:", mail);
            return null;
        }
    }
    catch (error) {
        console.error("Error during login:", error);
        throw new Error("An unexpected error occurred during login");
    }
};
exports.userService = {
    getAllUsers,
    addUser,
    login
};
