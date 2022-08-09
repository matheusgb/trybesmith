import ILogin from '../interfaces/login.interface';
import loginModel from '../models/login.model';
import * as jwt from './jwt.service';

export default async function loginService(user: ILogin) {
  const searchUser = await loginModel(user);
  if (!searchUser) {
    return 'User not found';
  }

  const token = jwt.newToken(searchUser);
  return token;
}
