import { configureStore } from '@reduxjs/toolkit';

// slices
import userReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
}) 