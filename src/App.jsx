import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Middleware from './middleware/App'

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
const UpdateAccount = lazy(() => import("./pages/Account/UpdateAccount"))

// NOTE - Saldo
const Saldo = lazy(() => import("./pages/Saldo"))

// NOTE - Transaction
const Transaction = lazy(() => import("./pages/Transaction"))
const DetailTransaction = lazy(() => import("./pages/Transaction/DetailTransaction"))

// NOTE - Notification
const Notification = lazy(() => import('./pages/Notification'))
const DetailNotification = lazy(() => import('./pages/Notification/DetailNotification'))

// NOTE - Customer Service
const CustomerService = lazy(() => import('./pages/CustomerService'))

// NOTE - Setting
const Setting = lazy(() => import('./pages/Setting'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='*' element={<div>Not Found!</div>} />

        {/* NOTE - Auth */}
        <Route path='/' element={<Middleware.Guest render={<Login />} />} />
        <Route path='/register' element={<Middleware.Guest render={<Register />} />} />
        <Route path='/forgot-password' element={<Middleware.Guest render={<ForgotPassword />} />} />
        <Route path='/verifikasi' element={<Middleware.Guest render={<VerifOtp />} />} />

        {/* NOTE - Home */}
        <Route path='/dashboard' element={<Middleware.Authenticated render={<Home />} />} />

        {/* NOTE - Deposit */}
        <Route path='/deposit' element={<Middleware.Authenticated render={<Deposit />} />} />
        <Route path='/deposit/history' element={<Middleware.Authenticated render={<History />} />} />
        <Route path='/payment-method' element={<Middleware.Authenticated render={<PaymentMethod />} />} />
        <Route path='/payment/id' element={<Middleware.Authenticated render={<Payment />} />} />

        {/* NOTE - Account */}
        <Route path='/account' element={<Middleware.Authenticated render={<Account />} />} />
        <Route path='/account/id' element={<Middleware.Authenticated render={<UpdateAccount />} />} />

        {/* NOTE - Saldo */}
        <Route path='/saldo' element={<Middleware.Authenticated render={<Saldo />} />} />

        {/* NOTE - Transaction */}
        <Route path='/transaction' element={<Middleware.Authenticated render={<Transaction />} />} />
        <Route path='/transaction/id' element={<Middleware.Authenticated render={<DetailTransaction />} />} />

        {/* NOTE - Notification */}
        <Route path='/notification' element={<Middleware.Authenticated render={<Notification />} />} />
        <Route path='/notification/id' element={<Middleware.Authenticated render={<DetailNotification />} />} />

        {/* NOTE - Customer Service */}
        <Route path='/customer-service' element={<Middleware.Authenticated render={<CustomerService />} />} />

        {/* NOTE - Setting */}
        <Route path='/setting' element={<Middleware.Authenticated render={<Setting />} />} />
      </Routes>
    </Suspense>
  )
}
