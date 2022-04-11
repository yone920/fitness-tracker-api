import { Schema, model } from 'mongoose';


interface User {
  name: string;
  email: string;
  password: string;
  date: Date;
}

const userSchema = new Schema<User>({
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
})


const UserModel = model<User>('User', userSchema);

export default UserModel;