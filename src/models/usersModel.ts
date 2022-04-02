import { ResultSetHeader, Pool } from 'mysql2/promise';
import { IUser, IUserWithId } from '../interfaces/usersInterfacer';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUserWithId> {
    const { username, classe, level, password } = user;
    const sql = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)';
    const [result] = await this.connection
      .execute<ResultSetHeader>(sql, [username, classe, level, password]);

    const { insertId: id } = result;
    return { id, username, classe, level, password } as IUserWithId;
  }
}