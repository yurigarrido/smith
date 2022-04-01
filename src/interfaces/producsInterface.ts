export interface IProduct {
  name: string,
  amount: string
  orderId: string
}

export interface Product extends IProduct{
  id: number;
}