import { createSlice } from "@reduxjs/toolkit";

export const appErrorSlice = createSlice({
    name: 'error',
    initialState: {
        isError: false,
        errorMessage: ''
    },
    reducers: {
        setAppError: {
            reducer(state, action){
                state.isError = action.payload.error
                state.errorMessage = action.payload.errorMessage
            }
        },

    }
});

export const {setAppError} = appErrorSlice.actions;
export default appErrorSlice.reducer;