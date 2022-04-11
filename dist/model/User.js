"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const UserModel = mongoose_1.model('User', userSchema);
exports.default = UserModel;
