import { validateBody } from '../../decorators/index.js';
import { userSignUpSchema } from '../../schemas/user-schema.js';

const userSignUpValidate = validateBody(userSignUpSchema);

export default {
  userSignUpValidate,
};
