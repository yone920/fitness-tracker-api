import experss, { Request, Response } from 'express';
import { Schema, model } from 'mongoose';
const router = experss.Router();
// const User = require('../model/User');
// import User from '../model/User'


// interface User {
//   name: string;
//   email: string;
//   password: string;
//   date: Date;
// }

const userSchema = new Schema({
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
})


const User = model('user', userSchema);

router.post('/register', async (req: Request, res: Response) => {
  const user = new User({name: req.body.name, email: req.body.email, password: req.body.password})

  try{
    console.log(user)
    const savedUser = await user.save()
    res.send(savedUser);
  }catch(err){
    console.log("catch")
    res.status(400).send(err)
  }
})

// router.post('/login', (req: Request, res: Response) => {

// })
// module.exports = router;
export default router;