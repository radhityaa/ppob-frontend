import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from '../utils/Axios'

export const getCategory = createAsyncThunk('categories/get', async (name) => {
    const { data } = await Axios.get(`/category/${name}`)
    return data.data
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.data = null
                state.loading = true
                state.error = null
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false
                state.error = null

                const brandData = action.payload
                const productBrands = brandData?.map(product => product.brand)
                const brands = Array.from(new Set(productBrands))
                const finnalyBrands = brands.map(item => ({ label: item, value: item }))
                state.data = finnalyBrands
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.data = null
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default categorySlice.reducer