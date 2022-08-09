import IUser from '../interfaces/user.interface';
import createUserModel from '../models/user.model';
import * as jwt from './jwt.service';

export default async function createUserService(user: IUser) {
  const newUser = await createUserModel(user);
  console.log(newUser);
  const token = jwt.newToken(newUser);
  
  return token;
}