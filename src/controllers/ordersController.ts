import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const allOrders = await this.ordersService.getAll();
    const formatAllOrders = (allOrders.map((test) => Object(
      { id: test.id, userId: test.userId, products: [test.products] },
    )));
    res.status(200).json(formatAllOrders);
  };
}