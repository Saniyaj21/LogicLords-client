import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { base_url } from '../../main';
import axios from 'axios'

const initialState = {
    user: {},
    isAuthenticated: false,
    status: 'idle',
    error: null,
    isUpdated: false,
    changePass: false
};

// API REQUESTS

// register user
export const registerUser = createAsyncThunk('user/registerUser', async ({ name, email, password }) => {

    const response = await axios.post(`${base_url}/api/user/register`, {
        name, email, password
    }, {
        withCredentials: true,
    });
    return response.data;

});

// register user verify email
export const verifyEmail = createAsyncThunk('user/verifyEmail', async ({ otp, email }) => {
    console.log(otp);
    const response = await axios.post(`${base_url}/api/user/emailverify`, {
        otp, email
    }, {
        withCredentials: true,
    });
    console.log(response.data);
    return response.data;

});

// Creating slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // register user
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;

            })
            .addCase(registerUser.rejected, (state, action) => {

                state.status = 'failed';
                state.error = action.error.message;

            })
            // register users email verification
            .addCase(verifyEmail.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.user = action.payload.user;

            })
            .addCase(verifyEmail.rejected, (state, action) => {

                state.status = 'failed';
                state.error = action.error.message;

            })
            

    },
});

export default userSlice.reducer;

// Export any actions you need
export const selectUser = (state) => state.user;  
