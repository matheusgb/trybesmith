import IUser from '../interfaces/user.interface';
import * as userModel from '../models/user.model';
import * as jwt from './jwt.service';

export async function createUser(user: IUser) {
  const newUser = await userModel.createUser(user);
  const token = jwt.newToken(newUser);
  
  return token;
}