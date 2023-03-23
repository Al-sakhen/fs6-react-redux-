import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "theme",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        toggleAutth: (state) => {
            state.isLoggedIn = !state.isLoggedIn ;
        },
    },
});

export const { toggleAutth } = authSlice.actions;

export default authSlice.reducer;
