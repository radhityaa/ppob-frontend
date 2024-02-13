import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../utils/Axios";

export const detailUser = createAsyncThunk('user/detail', async (token) => {
    const { data } = await Axios.get('/users/current')
    return data.data
})

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(detailUser.pending, (state, action) => {
                state.user = null
                state.loading = true
                state.error = null
            })
            .addCase(detailUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(detailUser.rejected, (state, action) => {
                state.user = null
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default userSlice.reducer