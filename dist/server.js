"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const path = __importStar(require("path"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const v1_1 = __importDefault(require("./api/v1"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: '/home/ubuntu/Epicure-project/current/.env' });
const app = (0, express_1.default)();
const server = http.createServer(app);
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path.resolve('public')));
}
else {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173',
            'http://127.0.0.1:5174',
            'http://localhost:5174',
        ],
        credentials: true,
    };
    app.use((0, cors_1.default)(corsOptions));
}
app.use('/api', v1_1.default);
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('Epicure/build/index.html'));
});
const port = process.env.PORT || 3030;
mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/Epicure').then(() => {
    console.log('db connected');
    server.listen(port, () => {
        console.log('Server is running on port: ' + port);
    });
}).catch(error => { console.log('had issues connecting to db', error); });
