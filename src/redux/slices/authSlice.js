import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { base_url } from '../../main';
import axios from 'axios'

const initialState = {
    user: {},
    isAuthenticated: false,
    status: 'idle',
    error: null,
    authStatus: {
        otpSend: 'idle',
        otpVerified: 'idle',
        googleStatus: 'idle'
    }
};

// API REQUESTS

// get user details - profile
export const getUser = createAsyncThunk('user/getUser', async () => {
    const response = await axios.get(`${base_url}/api/user/profile`, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });
    console.log(response);
    return response.data;
});


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
// googleSignUp
export const googleSignUp = createAsyncThunk('user/googleSignUp', async ({ name, email, avatar }) => {

    console.log("Checking", name, email, avatar);
    const response = await axios.post(`${base_url}/api/user/signup/google`, {
        name, email, avatar
    }, {
        withCredentials: true,
    });
    console.log(response.data);
    return response.data;

});

// logout user
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {

    const response = await axios.get(`${base_url}/api/user/logout`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

    return response.data;
});

// Creating slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state, action) => {

            state.error = null,
                state.authStatus.otpSend = 'idle',
                state.authStatus.otpVerified = 'idle'

        },
    },
    extraReducers: (builder) => {
        builder
            //  get user detailsF
            .addCase(getUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed';
            })

            // register user
            .addCase(registerUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
                state.authStatus.otpSend = "loading"
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.authStatus.otpSend = "succeeded"
                state.user = action.payload.user;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = "failed";
                state.authStatus.otpSend = "failed"
                state.error = action.error.message;

            })
            // register users email verification
            .addCase(verifyEmail.pending, (state) => {
                state.status = "loading";
                state.authStatus.otpVerified = "loading"
                state.error = null;
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.authStatus.otpVerified = "succeeded"
                state.isAuthenticated = true
                state.user = action.payload.user;
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.status = "failed";
                state.authStatus.otpVerified = "failed"
                state.error = action.error.message;

            })

            // googleSignUp
            .addCase(googleSignUp.pending, (state) => {
                state.status = "loading";
                state.error = null;
                state.authStatus.googleStatus = "loading"
            })
            .addCase(googleSignUp.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.authStatus.googleStatus = "succeeded"
                state.user = action.payload.user
                state.isAuthenticated = true
            })
            .addCase(googleSignUp.rejected, (state, action) => {
                state.status = "failed";
                state.authStatus.googleStatus = "failed"
                state.error = action.error.message;

            })



            // logout user
            .addCase(logoutUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = null;
                state.isAuthenticated = false;

            })
            .addCase(logoutUser.rejected, (state, action) => {

                state.status = 'failed';
                state.error = action.error.message;

            })


    },
});

export default userSlice.reducer;
export const { clearError } = userSlice.actions;

// Export any actions you need
export const selectUser = (state) => state.user;  
