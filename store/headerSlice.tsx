import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sideBarShow: false,
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setSideBarShow (state, action) {
          state.sideBarShow = action.payload
        },
    }
})

export const {setSideBarShow} = headerSlice.actions
export const headerReducer = headerSlice.reducer;
