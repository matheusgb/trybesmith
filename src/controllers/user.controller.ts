import { Request, Response } from 'express';
import httpStatus from 'http-status';
import IUser from '../interfaces/user.interface';
import createUserService from '../services/user.service';

export default async function createUserController(req: Request, res: Response) {
  try {
    const user = req.body as IUser;
    const token = await createUserService(user);
    res.status(httpStatus.CREATED).json({ token });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
}