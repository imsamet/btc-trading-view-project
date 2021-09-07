import { createSlice } from "@reduxjs/toolkit";

export const orderBookSlice = createSlice({
    name: 'order_book',
    initialState: {
        value: {}
    },
    reducers: {
        orderBookSocket: (state, action) => {

            action.payload.asks && action.payload.bids ?
                state.value = {
                    asks: action.payload.asks.splice(0, 15),
                    bids: action.payload.bids.splice(0, 15)
                }
            :
                state.value = {}
        }
    }
})

export const { orderBookSocket } = orderBookSlice.actions
export default orderBookSlice.reducer;