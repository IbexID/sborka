export interface IShoesItem {
    id: number;
    image: string;
    price: number;
    title: string;
    model: string;
    highResImage?: string;
}

export interface IShoesItemInCart extends IShoesItem {
    quantity: number;
  }