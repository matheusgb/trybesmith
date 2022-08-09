import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as jwtService from '../services/jwt.service';

dotenv.config();

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: 'Token not found',
    });
  }
  const decoded = jwtService.validateToken(authorization);

  if (decoded instanceof Error) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: 'Invalid token',
    });
  }
  next();
}