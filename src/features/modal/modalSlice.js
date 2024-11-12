import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const modalSlice = createSlice({
    name:"modals",
    initialState,
    reducers:{
        onChange(state,action){
            const {name, value} = action.payload
            state[name] = value
        },
        resetState(state){
            return initialState
        }
    }

})

export default modalSlice.reducer
export const {onChange, resetState} = modalSlice.actions
export const selectAllModalData = (state) => state.modals
