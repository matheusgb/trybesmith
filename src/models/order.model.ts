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
  const [result] = await connection.execute(query);

  return result as IOrder[];
}

export async function createOrder(userId: number, productsIds: number[]) {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

  const [result] = await connection.execute(query, [userId]) as { insertId: number }[];
  const { insertId: id } = result;
  
  const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

  await Promise.all(productsIds.map(async (productId: number) => {
    await connection.execute(query2, [id, productId]);
  }));
  
  return { userId, productsIds };
}