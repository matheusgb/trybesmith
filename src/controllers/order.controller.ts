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

export const wait = 'wait';