import { FloatingLabel } from 'flowbite-react'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import App from '../layouts/App'
import { Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Deposit() {
    const amounts = [
        { "value": "50000", "label": "Rp 50.000" },
        { "value": "100000", "label": "Rp 100.000" },
        { "value": "150000", "label": "Rp 150.000" },
        { "value": "200000", "label": "Rp 200.000" },
        { "value": "250000", "label": "Rp 250.000" },
        { "value": "300000", "label": "Rp 300.000" },
        { "value": "350000", "label": "Rp 350.000" },
        { "value": "400000", "label": "Rp 400.000" },
        { "value": "500000", "label": "Rp 500.000" },
    ]

    const [nominal, setNominal] = useState()
    const navigate = useNavigate()

    async function onSubmit(e) {
        e.preventDefault()
        Cookies.set('nominal', nominal)
        navigate('/payment-method')
    }

    return (
        <App title='Deposit'>
            <Header />

            <form onSubmit={onSubmit}>
                <div className='bg-white rounded-lg h-48 -mt-10 mx-3 p-4'>
                    <div className="flex items-center justify-between">
                        <div className='font-semibold text-lg text-gray-custom'>Masukan Nominal Saldo</div>
                        <div className='cursor-pointer' onClick={() => navigate('/deposit/history')}>
                            <img src="/images/icons/history.png" className='w-8 h-8' />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <FloatingLabel variant="standard" label="Nominal" type='number' value={nominal} required />
                    </div>
                    <div className='mt-3 text-sm text-red-500'>*Minimal Rp. 50.000</div>
                </div>

                <div className='mt-5 mx-3'>
                    <div className="grid grid-cols-3 gap-3">
                        {amounts.map((item, index) => (
                            <div key={index}>
                                <button type='button' className='text-sm rounded-xl px-4 py-1 bg-transparent border-2 border-base shadow-md hover:bg-base hover:text-white transition duration-300 ease-in-out' onClick={() => setNominal(item.value)}>{item.label}</button>
                            </div>
                        ))}
                    </div>

                    <div className='mt-10'>
                        <button className='rounded-xl border-2 border-base w-full py-2 hover:bg-base hover:text-white transition duration-300 ease-in-out' type='submit'>Topup</button>
                    </div>
                </div>
            </form>
        </App>
    )
}
