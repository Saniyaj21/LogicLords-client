import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isAuthenticated: false,
    status: 'idle',
    error: null,
    isUpdated: false,
    changePass: false
};

// API REQUESTS
// here

// Creating slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    },
});

export default userSlice.reducer;

// Export any actions you need
export const selectUser = (state) => state.user;  
