export interface Product{
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  brand: string;
  category: string;
  image: string;
}

export type Cart = Product & {
  quantity:number
}