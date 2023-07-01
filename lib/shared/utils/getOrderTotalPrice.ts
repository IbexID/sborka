import { IShoesItemInCart } from "shared/types";

export const getOrderTotalPrice = (arr: IShoesItemInCart[]) => {
  return arr.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);
};
