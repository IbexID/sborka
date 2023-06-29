import { createSlice } from "@reduxjs/toolkit";
import * as I from "./interfaces";

const initialState: I.ICartState = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: I.IAddToCardPayload) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: I.IRemoveFromCardPayload ) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});
export const actions = { ...slice.actions };
export const reducer = slice.reducer;
