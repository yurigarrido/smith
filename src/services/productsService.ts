// import connection from '../models/connection';
// import ProductsModel from '../models/productsModel';
// import { Product } from '../interfaces/producsInterface';

// export default class ProductsService {
//   public model: ProductsModel;

//   constructor() {
//     this.model = new ProductsModel(connection);
//   }

//   public async getAll(): Promise<Product[]> {
//     const products = await this.model.getAll();
//     return products;
//   }
// }

import { Product } from '../interfaces/producsInterface';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductsService;