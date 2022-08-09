import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import * as validation from '../middlewares/product.middleware';

const productRoute = Router();

productRoute.post(
  '/', 
  validation.productNameValidation, 
  validation.productAmountValidation,
  productController.addProduct,
);

productRoute.get('/', productController.getAllProducts);

export default productRoute;