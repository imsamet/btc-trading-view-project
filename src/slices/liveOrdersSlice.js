import { createSlice } from "@reduxjs/toolkit";

export const liveOrdersSlice = createSlice({
    name: 'live_orders',
    initialState: {
        value: []
    },
    reducers: {
        liveOrdersAdd: (state, action) => {

            let newArray = state.value;

            if(action.payload.constructor === Object && Object.keys(action.payload).length > 0){

                if(newArray.length >= 30 ){
                    newArray.shift()
                    newArray.push(action.payload)
                }else{
                    newArray.push(action.payload)
                }

                state.value = newArray

            }
            
        }
    }
})

export const { liveOrdersAdd } = liveOrdersSlice.actions
export default liveOrdersSlice.reducer;