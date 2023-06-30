import { PayloadAction } from "@reduxjs/toolkit";
import { IShoesItem, IShoesItemInCart } from "shared/types";


export interface ICartState {
  items: IShoesItemInCart[];
}

export type IAddToCardPayload = PayloadAction<IShoesItem>
export type IRemoveFromCardPayload = PayloadAction<number>
export type IHandleQuantityPayload = PayloadAction<number>
