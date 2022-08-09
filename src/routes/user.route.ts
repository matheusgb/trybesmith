import { Router } from 'express';
import createUserController from '../controllers/user.controller';
import * as validation from '../middlewares/user.middleware';

const userRoute = Router();

userRoute.post(
  '/', 
  validation.classValidation, 
  validation.levelValidation,
  validation.passwordValidation, 
  validation.usernameValidation, 
  createUserController,
);

export default userRoute;