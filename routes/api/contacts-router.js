import express from 'express';
import contactController from '../../controllers/contact-controller.js';
import {
  authentificate,
  contactValidate,
  isValidId,
} from '../../middleware/index.js';

const contactsRouter = express.Router();
contactsRouter.use(authentificate);

contactsRouter.get('/', contactController.getAll);

contactsRouter.get('/:contactId', isValidId, contactController.getById);

contactsRouter.post(
  '/',
  contactValidate.addContactValidate,
  contactController.add
);

contactsRouter.put(
  '/:contactId',
  isValidId,
  contactValidate.putContactValidate,
  contactController.updateById
);

contactsRouter.patch(
  '/:contactId/favorite',
  isValidId,
  contactValidate.patchContactValidate,
  contactController.updateById
);
contactsRouter.delete('/:contactId', isValidId, contactController.deleteById);

export default contactsRouter;
