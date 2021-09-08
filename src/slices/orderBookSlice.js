import { createSlice } from "@reduxjs/toolkit";

export const orderBookSlice = createSlice({
    name: 'order_book',
    initialState: {
        value: {}
    },
    reducers: {
        orderBookAdd: (state, action) => {

            (action.payload.asks && action.payload.bids) &&
                (state.value = {
                    asks: action.payload.asks.splice(0, 15),
                    bids: action.payload.bids.splice(0, 15)
                })
        }
    }
})

export const { orderBookAdd } = orderBookSlice.actions
export default orderBookSlice.reducer;