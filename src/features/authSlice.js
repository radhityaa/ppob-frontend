import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: false
    },
    // extraReducers: (builder) => {
    //     builder
    // }
})

export default authSlice.reducer