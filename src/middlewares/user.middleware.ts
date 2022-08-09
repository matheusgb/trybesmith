import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export function usernameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (!username) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (username.length < 3) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  if (typeof username !== 'string') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" must be a string' });
  }

  next();
}

export function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (!password) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (password.length < 8) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  if (typeof password !== 'string') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" must be a string' });
  }

  next();
}

export function levelValidation(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;

  if (level < 1) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  if (!level) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"level" must be a number' });
  }

  next();
}

export function classValidation(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body;

  if (!classe) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"classe" is required' });
  }
  if (classe.length < 3) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" length must be at least 3 characters long' });
  }
  if (typeof classe !== 'string') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" must be a string' });
  }

  next();
}