import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    sideBarShow: false,
    capybaraShow: true,
    wordBalloonShow: true,
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setSideBarShow (state, action) {
          state.sideBarShow = action.payload
        },
        setCapybaraShow (state, action) {
            state.capybaraShow = action.payload
        },
        setWordBalloonShow (state, action) {
            state.wordBalloonShow = action.payload
        },
    }
})

export const {setSideBarShow, setCapybaraShow, setWordBalloonShow} = headerSlice.actions
export const headerReducer = headerSlice.reducer;
