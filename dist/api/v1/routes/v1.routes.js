"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chef_routes_1 = __importDefault(require("./chef.routes"));
const dish_routes_1 = __importDefault(require("./dish.routes"));
const restaurant_route_1 = __importDefault(require("./restaurant.route"));
const user_routes_1 = __importDefault(require("./user.routes"));
const v1Router = (0, express_1.Router)();
v1Router.use('/chef', chef_routes_1.default);
v1Router.use('/dish', dish_routes_1.default);
v1Router.use('/restaurant', restaurant_route_1.default);
v1Router.use('/user', user_routes_1.default);
exports.default = v1Router;
