import { configureStore } from "@reduxjs/toolkit";
import orderBookReducer from "../slices/orderBookSlice";

export const store = configureStore({
    reducer: {
        orderBook: orderBookReducer
    }
})