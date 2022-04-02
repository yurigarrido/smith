import { NextFunction, Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsMiddlewares {
  constructor(private productService = new ProductsService()) { }

  public validateName = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    try {
      if (!name) return res.status(400).json({ error: 'Name is required' });
      if (typeof name !== 'string') {
        return res.status(422).json({ error: 'Name must be a string' });
      }
      if (name.length < 3) {
        return res.status(422).json({ error: 'Name must be longer than 2 characters' });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'INternal Error' });
    }
  };

  public validateAmount = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;
    try {
      if (!amount) return res.status(400).json({ error: 'Amount is required' });
      if (typeof amount !== 'string') {
        return res.status(422).json({ error: 'Amount must be a string' });
      }
      if (amount.length < 3) {
        return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
      }
      next();
    } catch (error) {
      return res.status(500).json({ error: 'Internal Error' });
    }
  };
}

export default ProductsMiddlewares;