import { Schema, model } from 'mongoose';
import { handlleSaveError, runValidateAtupdate } from './hooks.js';

export const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      match: validRegex,
      unique: true,
      required: [true, 'Set name for contact'],
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre('findOneAndUpdate', runValidateAtupdate);
userSchema.post('findOneAndUpdate', handlleSaveError);
userSchema.post('save', handlleSaveError);

const User = model('user', userSchema);
export default User;
