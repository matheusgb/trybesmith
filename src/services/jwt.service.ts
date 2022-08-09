import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

export function newToken(user: object) {
  const token = jwt.sign(user, secret, { expiresIn: '1h' });
  return token;
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return false;
  }
}