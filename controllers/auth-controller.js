import bcrypt from 'bcryptjs';
import fs from 'fs/promises'
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../models/users.js';
import { ctrlWrapper } from '../decorators/index.js';
import HttpError from '../helpers/HttpError.js';
import path from 'path';

const posterPath = path.resolve('public', 'avatars')

const { JWT_SECRET } = process.env;

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const { path: oldPath, filename } = req.file;
  const newPath = path.join(posterPath, filename)
  fs.rename(oldPath, newPath);
  const poster = path.join('avatars', filename)
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, poster, password: hashPassword });
  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
    subscription: 'starter',
  });
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }
  const { _id: id } = user;
  const payload = {
    id,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
  await User.findByIdAndUpdate(id, { token });
  res.json({
    token,
    user: {
      email,
      subscription: 'starter',
    },
  });
};

const getCurrent = (req, res) => {
  const { name, email } = req.user;
  res.json({
    name,
    email,
  });
};
const signout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });
  res.json({
    message: 'Signout is success',
  });
};

export default {
  signUp: ctrlWrapper(signUp),
  signIn: ctrlWrapper(signIn),
  getCurrent: ctrlWrapper(getCurrent),
  signout: ctrlWrapper(signout),
};
