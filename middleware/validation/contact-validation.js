import contactAddSchema from '../../schemas/contact-schema.js';

import { validateBody } from '../../decorators/index.js';

const addContactValidate = validateBody(contactAddSchema);

export default {
  addContactValidate,
};
