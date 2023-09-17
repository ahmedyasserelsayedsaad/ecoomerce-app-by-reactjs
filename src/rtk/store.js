import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cart-slices";

export const Store=configureStore({
    reducer:{
    cart:cartSlices,
    }
})