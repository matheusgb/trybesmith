import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export function newToken(user: object) {
  return jwt.sign(user, secret, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return false;
  }
}