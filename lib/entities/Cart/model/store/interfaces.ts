import { PayloadAction } from "@reduxjs/toolkit";
import { IShoesItem } from "shared/types";

export interface ICartState {
  items: IShoesItem[];
}

export type IAddToCardPayload = PayloadAction<IShoesItem>
export type IRemoveFromCardPayload = PayloadAction<number>
