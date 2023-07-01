import { createSlice } from "@reduxjs/toolkit";
import * as I from "./interfaces";
import { getExistingInArrayById } from "shared/utils";

const initialState: I.ICartState = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: I.IAddToCardPayload) {
      const existingItem = getExistingInArrayById(state.items, action.payload.id)
      
      if (existingItem) {
        state.items[state.items.indexOf(existingItem)].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: I.IRemoveFromCardPayload) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseCount (state, action: I.IHandleQuantityPayload) {
      const existingItem = getExistingInArrayById(state.items, action.payload)
      if (!existingItem) return;
      state.items[state.items.indexOf(existingItem)].quantity += 1;
    },
    decreaseCount (state, action: I.IHandleQuantityPayload) {
      const existingItem = getExistingInArrayById(state.items, action.payload)
      if (!existingItem || existingItem.quantity <= 1) return;
      state.items[state.items.indexOf(existingItem)].quantity -= 1;
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});
export const actions = { ...slice.actions };
export const reducer = slice.reducer;
