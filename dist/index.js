"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const app = express_1.default();
const auth_1 = __importDefault(require("./routes/auth"));
const connectDB = require('../config/db');
dotenv.config({ path: './config/config.env' });
//Connect to DB
connectDB();
//Middleware
app.use(express_1.default.json());
//Route Middlewares
app.use('/api/user', auth_1.default);
app.listen(5050, () => console.log("serving up"));
//Handle unhadled rejections
// process.on("unhandledRejection, (err, promise) => {
//   const message: String = err.message;
//   console.log(`Error: ${message}`)
//   server.close()
// })
