import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/ordersInterface';

export default class OrdersModel {
  public connection: Pool;

  constructor(conncetion: Pool) {
    this.connection = conncetion;
  }

  public async getAll(): Promise<IOrder[]> {
    const sql = `
    SELECT orders.id, users.id AS userId, products.id AS products FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Users AS users ON users.id = orders.userId
    INNER JOIN Trybesmith.Products AS products ON products.orderId = orders.id`;
    const [allOrders] = await this.connection.execute(sql);

    return allOrders as unknown as IOrder[];
  }
}