import { Schema, model } from 'mongoose';

const ExersiceSchema = new Schema({
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
  }
})

module.exports = model('Exercise', ExersiceSchema)