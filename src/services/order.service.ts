import * as orderModel from '../models/order.model';
import * as jwtService from './jwt.service';

export async function getAllOrders() {
  const orders = await orderModel.getAllOrders();

  const products = orders.map(({ productsIds }) => productsIds.split(',').map(Number));
  return orders.map(({ id, userId }, index) => ({ id, userId, productsIds: products[index] }));
}

export async function createOrder(productsIds: number[], token: string) {
  const userId = jwtService.getIdFromToken(token as string);
  const data = await orderModel.createOrder(userId, productsIds);
  
  return data;
}