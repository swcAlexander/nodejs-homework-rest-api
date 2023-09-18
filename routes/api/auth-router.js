import express from 'express';
import { userValidate } from '../../middleware/index.js';
import authController from '../../controllers/auth-controller.js';
import { authenticate } from '../../middleware/index.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  userValidate.userSignUpValidate,
  authController.signUp
);
authRouter.post(
  '/login',
  userValidate.userSignInValidate,
  authController.signIn
);

authRouter.get('/current', authenticate, authController.getCurrent);
authRouter.post('/logout', authenticate, authController.signout);

export default authRouter;
