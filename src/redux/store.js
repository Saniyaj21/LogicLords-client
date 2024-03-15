import { configureStore } from '@reduxjs/toolkit';

// slices
import userReducer from './slices/authSlice'
import courseReducer from './slices/courseSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        course: courseReducer,
    }
}) 