import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { base_url } from '../../main.jsx';
import api from '../../utils/axiosInterceptor.js'

const initialState = {

    allCourses: [],

    status: {
        createCourse:'idle',
        getAllCourse:'idle',
        deleteCourse:'idle',
    },
    error: null,
};


export const createCourse = createAsyncThunk('user/createCourse', async (myform) => {
    console.log(myform);
    const response = await api.post(`${base_url}/api/course/create`, myform,{
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });
    console.log(response);
    return response.data;
});

// get all courses
export const getAllCourse = createAsyncThunk('user/getAllCourse', async () => {

    const response = await api.get(`${base_url}/api/course/all`,{
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });

    return response.data;
});


const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        clearError: (state, action) => {
            state.error = null
          }
    },
    extraReducers: (builder) => {
        builder
            //  create course
           
            .addCase(createCourse.pending, (state) => {
                state.status.createCourse = "loading";
                state.error = null;
             
            })
            .addCase(createCourse.fulfilled, (state, action) => {
                state.status.createCourse = "succeeded";
                state.allCourses.push(action.payload.course);
            })
            .addCase(createCourse.rejected, (state, action) => {
                state.status.createCourse = "failed";
                state.error = action.error.message;

            })
            //  get all course
           
            .addCase(getAllCourse.pending, (state) => {
                state.status.getAllCourse = "loading";
                state.error = null;
             
            })
            .addCase(getAllCourse.fulfilled, (state, action) => {
                state.status.getAllCourse = "succeeded";
                state.allCourses = action.payload.courses;
            })
            .addCase(getAllCourse.rejected, (state, action) => {
                state.status.getAllCourse = "failed";
                state.error = action.error.message;

            })
    },
});

export default courseSlice.reducer;
export const { clearError } = courseSlice.actions;

// Export any actions you need
export const selectCourse = (state) => state.course;  
