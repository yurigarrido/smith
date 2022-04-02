import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private productService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();
    res.status(200).json(allProducts);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const newProduct = await this.productService.create({ name, amount });
    return res.status(201).json({ item: newProduct });
  };
}

export default ProductsController;