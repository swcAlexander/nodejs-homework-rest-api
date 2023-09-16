import User from '../models/Users.js';
import { ctrlWrapper } from '../decorators/index.js';
import HttpError from '../helpers/HttpError.js';

const signUp = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
  });
};

export default {
  signUp: ctrlWrapper(signUp),
};
