import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product, IProduct } from '../interfaces/producsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [result] = await 
    this.connection.execute<RowDataPacket[]>(sql);
    return result as Product[];
  }

  public async create(product: IProduct): Promise<Product> {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)';
    const [result] = await
    this.connection.execute<ResultSetHeader>(sql, [name, amount]);

    const { insertId: id } = result;
    return { id, name, amount } as Product;
  }
}