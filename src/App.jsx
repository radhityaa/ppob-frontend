import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// SECTION - Route Lazy

// NOTE - Auth
const Login = lazy(() => import("./pages/Auth/Login"))
const Register = lazy(() => import("./pages/Auth/Register"))
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"))
const VerifOtp = lazy(() => import("./pages/Auth/VerifOtp"))

// NOTE - Home
const Home = lazy(() => import("./pages/Home"))

// NOTE - Deposit
const Deposit = lazy(() => import("./pages/Deposit"))
const PaymentMethod = lazy(() => import("./pages/Deposit/PaymentMethod"))
const Payment = lazy(() => import("./pages/Deposit/PaymentMethod/Payment"))
const History = lazy(() => import("./pages/Deposit/History"))

// NOTE - Account
const Account = lazy(() => import("./pages/Account"))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='*' element={<div>Not Found!</div>} />

        {/* NOTE - Auth */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verifikasi' element={<VerifOtp />} />

        {/* NOTE - Home */}
        <Route path='/dashboard' element={<Home />} />

        {/* NOTE - Deposit */}
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/deposit/history' element={<History />} />
        <Route path='/payment-method' element={<PaymentMethod />} />
        <Route path='/payment/id' element={<Payment />} />

        {/* NOTE - Account */}
        <Route path='/account' element={<Account />} />
      </Routes>
    </Suspense>
  )
}