import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import otpReducer from "../features/otpSlice"
import productReducer from "../features/productSlice";
import categoryReducer from "../features/categorySlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        otp: otpReducer,
        products: productReducer,
        category: categoryReducer,
    }
})