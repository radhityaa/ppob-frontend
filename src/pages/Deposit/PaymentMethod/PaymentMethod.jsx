import React from 'react'
import Header from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import App from '../../layouts/App'

export default function PaymentMethod() {
    const navigate = useNavigate()

    return (
        <App title='Metode Pembayaran'>
            <Header />

            <div className='bg-white rounded-lg h-48 -mt-10 mx-3 p-4'>
                <div className='font-semibold text-lg text-gray-custom'>Pilih Metode Pembayaran</div>
                <div className='mt-5'>
                    <div className='border-2 border-dashed px-2'>
                        <div className="flex items-center gap-5 cursor-pointer" onClick={() => navigate('/payment/id')}>
                            <div>
                                <img src="https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png" className='w-32 h-16' />
                            </div>
                            <div>
                                <div className='font-semibold'>Bank BCA</div>
                                <div className='text-sm text-gray-custom'>Transfer Bank</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
