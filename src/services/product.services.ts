import * as productModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

export async function addProduct(product: IProduct) {
  const result = await productModel.addProduct(product);
  return result;
}