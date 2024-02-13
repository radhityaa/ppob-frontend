import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import otpReducer from "../features/otpSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        otp: otpReducer,
    }
})