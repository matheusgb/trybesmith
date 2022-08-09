import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export function productNameValidation(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (name.length < 3) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  if (typeof name !== 'string') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" must be a string' });
  }

  next();
}

export function productAmountValidation(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;

  if (!amount) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"amount" is required' });
  }
  if (amount.length < 3) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  if (typeof amount !== 'string') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" must be a string' });
  }

  next();
}