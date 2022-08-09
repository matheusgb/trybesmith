import { Router } from 'express';
import * as orderController from '../controllers/order.controller';
import validateToken from '../middlewares/jwt.middleware';
import validateProductsIds from '../middlewares/order.middleware';

const orderRoute = Router();

orderRoute.post('/', validateToken, validateProductsIds, orderController.createOrder);
orderRoute.get('/', orderController.getAllOrders);

export default orderRoute;