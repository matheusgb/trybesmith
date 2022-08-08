import { Router } from 'express';
import createUserController from '../controllers/user.controller';

const userRoute = Router();

userRoute.post('/', createUserController);

export default userRoute;