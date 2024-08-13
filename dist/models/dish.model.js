"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
const mongoose_1 = require("mongoose");
const icon_1 = require("../api/v1/enum/icon");
const dishSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    image: { type: String },
    ingredients: { type: [String], required: true },
    price: { type: Number, required: true },
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    icons: [{ type: String, enum: Object.values(icon_1.EiconMeaning), default: null }],
    isActive: { type: Boolean, default: true }
});
const Dish = (0, mongoose_1.model)('Dish', dishSchema);
exports.Dish = Dish;
