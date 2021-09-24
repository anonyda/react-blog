import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/user/userSlice';
import errorReducer from '../features/appError/appErrorSlice';

const reducer = combineReducers({
    auth: authReducer,
    error: errorReducer
});

export const store = configureStore({
    reducer
});