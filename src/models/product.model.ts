import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

export async function addProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newProduct: IProduct = { ...product, id };
  return newProduct;
}

export async function getAllProducts(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as IProduct[];
}