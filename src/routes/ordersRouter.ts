import express from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRouter = express.Router();

const ordersController = new OrdersController();
ordersRouter.get('/', ordersController.getAll);

export default ordersRouter;