import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from '../utils/Axios'

export const getProductFilter = createAsyncThunk('product/filter', async (params) => {
    const { data } = await Axios.get(`/product?page=1&limit=99999${params}`)
    return data.data
})

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        loading: false,
        error: null,
        brands: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductFilter.pending, (state) => {
                state.data = null
                state.loading = true
                state.error = null
            })
            .addCase(getProductFilter.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
                const brandData = action.payload

                const productBrands = brandData?.map(product => product.brand)
                const brands = Array.from(new Set(productBrands))
                const finnalyBrands = brands.map(item => ({ label: item, value: item }))
                state.brands = finnalyBrands
            })
            .addCase(getProductFilter.rejected, (state, action) => {
                state.data = null
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer