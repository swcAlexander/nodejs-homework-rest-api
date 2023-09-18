import { validateBody } from '../../decorators/index.js';
import {
  userSignInSchema,
  userSignUpSchema,
} from '../../schemas/user-schema.js';

const userSignUpValidate = validateBody(userSignUpSchema);
const userSignInValidate = validateBody(userSignInSchema);

export default {
  userSignUpValidate,
  userSignInValidate,
};
