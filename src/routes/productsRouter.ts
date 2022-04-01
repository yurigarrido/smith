import express from 'express';
import ProductsControler from '../controllers/productsControler';

const productsRouter = express.Router();

const productsController = new ProductsControler();
productsRouter.get('/', productsController.getAll);

export default productsRouter;