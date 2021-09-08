import { createSlice } from "@reduxjs/toolkit";

export const liveTradesSlice = createSlice({
    name: 'live_trades',
    initialState: {
        value: []
    },
    reducers: {
        liveTradesAdd: (state, action) => {

            action.payload.constructor === Object && Object.keys(action.payload).length > 0 &&state.value.push(action.payload)

        }
    }
})

export const { liveTradesAdd } = liveTradesSlice.actions
export default liveTradesSlice.reducer;