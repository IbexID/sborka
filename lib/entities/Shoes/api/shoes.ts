import { IShoesItem } from "shared/types";
import { shoesItems } from "./constant";

export const fetchGetShoes = async (): Promise<IShoesItem[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(shoesItems);
    }, 500);
  });
};

export const fetchGetShoesById = async (id: number): Promise<IShoesItem | undefined> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(shoesItems.find((item) => item.id === id));
    }, 500);
  });
};
