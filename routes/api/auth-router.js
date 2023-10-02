import express from 'express';
import { userValidate } from '../../middleware/index.js';
import authController from '../../controllers/auth-controller.js';
import { authenticate, upload } from '../../middleware/index.js';

const authRouter = express.Router();

// upload.single('poster'),  - якщо ми очікуємо один файл в одному полі
// upload.arrey('poster', 8) - якщо ми очікуємо декілька файлів в одному полі
// upload.fields([name: 'poster', maxCount: 1]) -якщо ми очікуємо декілька полів

authRouter.get('/verify/:verificationToken', authController.verify);
authRouter.post(
  '/verify',
  userValidate.userEmailValidate,
  authController.resendVerifyEmail
);
authRouter.post(
  '/register',
  upload.single('avatars'),
  userValidate.userSignUpValidate,
  authController.signUp
);
authRouter.post(
  '/login',
  userValidate.userSignInValidate,
  authController.signIn
);
authRouter.patch(
  '/users/avatars',
  authenticate,
  upload.single('avatar'),
  authController.updateAvatar
);

authRouter.get('/current', authenticate, authController.getCurrent);
authRouter.post('/logout', authenticate, authController.signout);

export default authRouter;
