import { Pool } from 'mysql2/promise';
import { Product } from '../interfaces/producsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as Product[];
  }
}