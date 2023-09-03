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
});

export default contactAddSchema;
