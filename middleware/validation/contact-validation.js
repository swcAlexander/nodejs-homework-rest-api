import contactSchema from '../../schemas/contact-schema.js';

import { validateBody } from '../../decorators/index.js';

const addContactValidate = validateBody(contactSchema.contactAddSchema);
const putContactValidate = validateBody(contactSchema.contactPutSchema);
const patchContactValidate = validateBody(contactSchema.updateFavoriteSchema);

export default {
  addContactValidate,
  putContactValidate,
  patchContactValidate,
};
