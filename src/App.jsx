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
        <Route path='/account/id' element={<UpdateAccount />} />

        {/* NOTE - Saldo */}
        <Route path='/saldo' element={<Saldo />} />

        {/* NOTE - Transaction */}
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/transaction/id' element={<DetailTransaction />} />

        {/* NOTE - Notification */}
        <Route path='/notification' element={<Notification />} />
        <Route path='/notification/id' element={<DetailNotification />} />

        {/* NOTE - Customer Service */}
        <Route path='/customer-service' element={<CustomerService />} />

        {/* NOTE - Setting */}
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </Suspense>
  )
}
