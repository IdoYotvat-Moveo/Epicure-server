"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
    throw new Error('Missing JWT_SECRET environment variable');
}
const authMiddleware = (req, res, next) => {
    try {
        // Extract token
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'Authorization header is missing' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Token is missing' });
        }
        // Verify the token
        const decodedToken = jsonwebtoken_1.default.verify(token, secretKey);
        if (!decodedToken) {
            throw new Error('Problem with token');
        }
        else if (decodedToken.role !== 'admin') {
            return res.status(401).json({ error: 'Authorization user' });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(401).json({
            error: (error instanceof Error) ? error.message : 'Invalid request!',
        });
    }
};
exports.default = authMiddleware;
