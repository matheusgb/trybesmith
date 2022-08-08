import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const productRoute = Router();

productRoute.post('/', productController.addProduct);
productRoute.get('/', productController.getAllProducts);

export default productRoute;