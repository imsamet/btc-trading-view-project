import { configureStore } from "@reduxjs/toolkit";
import orderBookReducer from "../slices/orderBookSlice";
import liveOrderReducer from '../slices/liveOrdersSlice'

export const store = configureStore({
    reducer: {
        orderBook: orderBookReducer,
        liveOrders: liveOrderReducer
    }
})