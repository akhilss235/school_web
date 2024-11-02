import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedTab : "",
    isVisible : true
}

const tabSlice = createSlice({
    name : "tabs",
    initialState,
    reducers : {
        changeVisible(state){
            state.isVisible = !state.isVisible
        },
        changeTab : (state, action) => {
            state.selectedTab = action.payload;
            state.isVisible = true
        }
    }
})

export default tabSlice.reducer
export const { changeTab, changeVisible }  = tabSlice.actions
export const selectTab = (state)=>state.tabs