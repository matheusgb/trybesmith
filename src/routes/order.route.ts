import { Router } from 'express';
import * as orderController from '../controllers/order.controller';

const orderRoute = Router();

orderRoute.get('/', orderController.getAllOrders);

export default orderRoute;