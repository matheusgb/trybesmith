import { Request, Response } from 'express';
import httpStatus from 'http-status';
import * as orderService from '../services/order.service';

export async function getAllOrders(_req: Request, res: Response) {
  try {
    const orders = await orderService.getAllOrders();
    res.status(httpStatus.OK).json(orders);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function createOrder(req: Request, res: Response) {
  try {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
    const data = await orderService.createOrder(productsIds, authorization as string);
    res.status(httpStatus.CREATED).json(data);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
}
