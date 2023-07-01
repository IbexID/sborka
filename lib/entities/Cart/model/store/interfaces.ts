import { PayloadAction } from "@reduxjs/toolkit";
import { IShoesItemInCart, IShoesItem } from "entities/Shoes/types";


export interface ICartState {
  items: IShoesItemInCart[];
  isOpen: boolean;
}

export type IAddToCardPayload = PayloadAction<IShoesItem>
export type IRemoveFromCardPayload = PayloadAction<number>
export type IHandleQuantityPayload = PayloadAction<number>
