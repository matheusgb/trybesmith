import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export function newToken(user: object) {
  const token = jwt.sign(user, secret, { expiresIn: '5d' });
  return token;
}

export function validateToken(token: string) {
  try {
    const { data } = jwt.verify(token, secret as string) as { data: string };
    return data;
  } catch (error) {
    const err = new Error();
    return err;
  }
}

export function getIdFromToken(token: string) {
  const { id } = jwt.verify(token, secret as string) as { id: number };
  return id;
}