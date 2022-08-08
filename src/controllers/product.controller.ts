import { Request, Response } from 'express';
import httpStatus from 'http-status';
import * as productService from '../services/product.services';

export async function addProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const product = { name, amount };
  const result = await productService.addProduct(product);
  res.status(httpStatus.CREATED).json(result);
}

export async function getAllProducts(req: Request, res: Response) {
  const result = await productService.getAllProducts();
  res.status(httpStatus.OK).json(result);
}