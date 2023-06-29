import { IShoesItem } from "shared/types";
import { shoesItems } from "./constant";

export const fetchGetShoes = async (): Promise<IShoesItem[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(shoesItems);
    }, 500);
  });
};
