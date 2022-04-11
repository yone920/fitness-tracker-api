"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const router = express_1.default.Router();
// const User = require('../model/User');
// import User from '../model/User'
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   date: Date;
// }
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1042,
        min: 6
    }
});
const User = mongoose_1.model('user', userSchema);
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password });
    try {
        console.log(user);
        const savedUser = yield user.save();
        res.send(savedUser);
    }
    catch (err) {
        console.log("catch");
        res.status(400).send(err);
    }
}));
// router.post('/login', (req: Request, res: Response) => {
// })
// module.exports = router;
exports.default = router;
