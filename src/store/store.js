import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice/cartSlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
