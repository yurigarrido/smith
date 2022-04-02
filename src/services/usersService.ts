import { IUser } from '../interfaces/usersInterfacer';
import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import { createToken } from '../utils/jsonWebToken';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: IUser): Promise<string> {
    const newUser = await this.model.create(user);
    const token = await createToken(newUser);
    return token;
  }
}