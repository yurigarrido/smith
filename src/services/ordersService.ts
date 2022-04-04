import { IOrder } from '../interfaces/ordersInterface';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const allOrders = await this.model.getAll();
    return allOrders;
  }
}