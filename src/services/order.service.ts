import * as orderModel from '../models/order.model';

export async function getAllOrders() {
  const orders = await orderModel.getAllOrders();

  const products = orders.map(({ productsIds }) => productsIds.split(',').map(Number));
  return orders.map(({ id, userId }, index) => ({ id, userId, productsIds: products[index] }));
}

export const wait = 'wait';