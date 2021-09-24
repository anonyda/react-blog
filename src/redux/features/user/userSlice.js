import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isUserLoggedIn: false,
        user: null
    },
    reducers: {
        login: {
            reducer(state, action){
                state.isUserLoggedIn = true;
                state.user = action.payload
            }
        },
        logout: {
            reducer(state){
                state.isUserLoggedIn = false;
                state.user = null
            }
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;