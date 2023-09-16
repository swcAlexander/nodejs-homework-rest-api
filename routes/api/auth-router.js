import express from 'express';
import { userSignUpValidate } from '../../middleware/validation/index.js';
import authController from '../../controllers/auth-controller.js';

const authRouter = express.Router();

authRouter.post('/signUp', userSignUpValidate, authController.signUp);

export default router;
