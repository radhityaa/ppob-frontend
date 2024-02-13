import { createSlice } from "@reduxjs/toolkit";

export const otpSlice = createSlice({
    name: 'otp',
    initialState: {
        canResend: false,
        countdown: 3,
        loading: false,
        error: null
    },
    reducers: {
        startCountdown: (state) => {
            state.canResend = false,
                state.countdown = 3
        },
        decrementCountdown: (state) => {
            if (state.countdown > 0) {
                state.countdown -= 1
            } else {
                state.canResend = true
            }
        }
    }
})

export const { startCountdown, decrementCountdown } = otpSlice.actions
export default otpSlice.reducer