import { Request, Response } from 'express';
import httpStatus from 'http-status';
import * as productService from '../services/product.service';

export async function addProduct(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    const product = { name, amount };
    const result = await productService.addProduct(product);
    return res.status(httpStatus.CREATED).json(result);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getAllProducts(_req: Request, res: Response) {
  try {
    const result = await productService.getAllProducts();
    return res.status(httpStatus.OK).json(result);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
}