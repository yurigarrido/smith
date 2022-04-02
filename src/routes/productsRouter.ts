import express from 'express';
import ProductsControler from '../controllers/productsControler';
import ProductsMiddlewares from '../middlewares/productsMiddleware';

const productsRouter = express.Router();

const productsController = new ProductsControler();
const productsMiddlewares = new ProductsMiddlewares();

productsRouter.get('/', productsController.getAll);
productsRouter.post(
  '/', 
  productsMiddlewares.validateName,
  productsMiddlewares.validateAmount,
  productsController.create,
);

export default productsRouter;