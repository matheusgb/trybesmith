import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const productRoute = Router();

productRoute.post('/', productController.addProduct);

export default productRoute;