import connection from './connection';
import ILogin from '../interfaces/login.interface';

export default async function loginModel(user: ILogin): Promise<ILogin | null> {
  const { username, password } = user;
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const values = [username, password];
  const [result] = await connection.execute(query, values);
  const [userData] = result as ILogin[];
  if (!userData) {
    return null;
  }

  const login = { ...userData };

  return login;
}