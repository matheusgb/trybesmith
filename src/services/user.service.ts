import IUser from '../interfaces/user.interface';
import createUserModel from '../models/user.model';
import * as jwtService from './jwt.service';

export default async function createUserService(user: IUser) {
  const newUser = await createUserModel(user);
  const token = jwtService.newToken(newUser);

  return token;
}