import jwt, { SignOptions } from 'jsonwebtoken';
import { IUserWithId } from '../interfaces/usersInterfacer';

const SECRET_KEY: string = process.env.JWT_SECRET || 'secretpassword';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const createToken = (user: IUserWithId) => {
  const token = jwt.sign(user, SECRET_KEY, jwtConfig);
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const dataUser = jwt.verify(token, SECRET_KEY);
    return dataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};