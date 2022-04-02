import { IProduct, Product } from '../interfaces/producsInterface';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: IProduct): Promise<Product> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}
