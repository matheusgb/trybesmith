import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export default function validateProductsIds(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
    
  if (!productsIds) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }
  
  if (!Array.isArray(productsIds)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must be an array' });
  }

  const haveNoNumbers = productsIds.some((id: number) => typeof id !== 'number');
  
  if (haveNoNumbers || productsIds.length === 0) {    
    return res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must include only numbers' });
  }

  next();
}