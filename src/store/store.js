import { configureStore } from "@reduxjs/toolkit";
import orderBookReducer from "../slices/orderBookSlice";
import liveOrderReducer from '../slices/liveOrdersSlice'
import liveTradesReducer from '../slices/liveTradesSlice'

export const store = configureStore({
    reducer: {
        orderBook: orderBookReducer,
        liveOrders: liveOrderReducer,
        liveTrades: liveTradesReducer
    }
})