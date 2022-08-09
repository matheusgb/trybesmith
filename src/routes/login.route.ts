import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const loginRoute = Router();

loginRoute.post('/', loginMiddleware, loginController);

export default loginRoute;