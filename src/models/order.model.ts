import IOrder from '../interfaces/order.interface';
import connection from './connection';

export async function getAllOrders(): Promise<IOrder[]> {
  const query = `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,
  GROUP_CONCAT(Trybesmith.Products.id) AS productsIds
  FROM Trybesmith.Orders
  INNER JOIN Trybesmith.Products
  ON Trybesmith.Orders.id = Trybesmith.Products.orderId
  GROUP BY Trybesmith.Orders.id
  ORDER BY Trybesmith.Orders.userId`;
  const [result] = await connection.query(query);

  return result as IOrder[];
}

export const wait = 'wait';