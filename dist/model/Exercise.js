"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");

const schema = mongoose_1.Schema;

const ExersiceSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ["Running", "Walking", "PushUp", "PullUp"],
        require: [true, 'Please add a name'],
        maxLength: [50, "Type can not be more than 50 charachters"]
    },
    description: {
        type: String,
        required: false,
        maxLength: [400, "Description can not be more than 400 charachters"]
    },
    distance: {
        type: Number,
        required: [true, 'Please add a number'],
    },
    goal: {
      id: schema.Types.ObjectID,
      ref: "Goal"
    }
});
module.exports = mongoose_1.model('Exercise', ExersiceSchema);
