import { Request, Response } from 'express';
import httpStatus from 'http-status';
import loginService from '../services/login.service';

export default async function loginController(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = { username, password };
    const token = await loginService(user);
    if (token === 'User not found') {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
    return res.status(httpStatus.OK).json({ token });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
  }
}