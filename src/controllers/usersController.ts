import { Request, Response } from 'express';
import UserService from '../services/usersService';

export default class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const userToken = await this.userService.create({ username, classe, level, password });
    return res.status(201).json({ token: userToken });
  };
}
