import Joi from 'joi';

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': `"title" must be exist`,
  }),
  email: Joi.string().required().messages({
    'any.required': `"email" must be exist`,
  }),
  phone: Joi.string().required().messages({
    'any.required': `"phone" must be exist`,
  }),
  favorite: Joi.boolean(),
});

const contactPutSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': `missing field favorite`,
  }),
});
export default { contactAddSchema, contactPutSchema, updateFavoriteSchema };
