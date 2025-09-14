import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item = { id, title, price, img, quantity }
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalCount += 1;
      state.totalPrice += parseFloat(product.price.replace("$", ""));
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((i) => i.id === productId);

      if (item) {
        state.totalCount -= item.quantity;
        state.totalPrice -= item.quantity * parseFloat(item.price.replace("$", ""));
        state.items = state.items.filter((i) => i.id !== productId);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
