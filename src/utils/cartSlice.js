import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["banana", "mango"],
  },
  reducers: {
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    clearCart: (store, action) => {
      store.items = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
