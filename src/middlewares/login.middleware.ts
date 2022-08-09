import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

const loginSchema = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(body);

  if (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }

  next();
};

export default loginSchema;