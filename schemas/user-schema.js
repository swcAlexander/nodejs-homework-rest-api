import Joi from 'joi';
import { validRegex } from '../models/users.js';

export const userSignUpSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': `"username" must be exist`,
  }),
  email: Joi.string().pattern(validRegex).required().messages({
    'any.required': `"email" must be exist`,
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': `"password" must be exist`,
  }),
});

export const userSignInSchema = Joi.object({
  email: Joi.string().pattern(validRegex).required().messages({
    'any.required': `"email" must be exist`,
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': `"password" must be exist`,
  }),
});

export const userVerifySchema = Joi.object({
  email: Joi.string().pattern(validRegex).required().messages({
    'any.required': `"email" must be exist`,
  }),
});
