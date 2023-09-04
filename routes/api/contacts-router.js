import express from 'express';
import contactController from '../../controllers/contact-controller.js';
import contactValidation from '../../middleware/validation/contact-validation.js';

const contactsRouter = express.Router();

contactsRouter.get('/', contactController.getAll);

contactsRouter.get('/:contactId', contactController.getById);

contactsRouter.post(
  '/',
  contactValidation.addContactValidate,
  contactController.add
);

contactsRouter.put(
  '/:contactId',
  contactValidation.putContactValidate,
  contactController.updateById
);

contactsRouter.delete('/:contactId', contactController.deleteById);

export default contactsRouter;
