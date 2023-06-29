import { createSlice } from "@reduxjs/toolkit";
import * as I from "./interfaces";

const initialState: I.ICartState = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.items.push(payload);
    },
    removeFromCart(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});
export const actions = { ...slice.actions };
export const reducer = slice.reducer;
