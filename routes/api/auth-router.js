import express from 'express';
import { userValidate } from '../../middleware/index.js';
import authController from '../../controllers/auth-controller.js';
import { authentificate } from '../../middleware/index.js';

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

authRouter.get('/current', authentificate, authController.getCurrent);
authRouter.post('/logout', authentificate, authController.signout);

export default authRouter;
