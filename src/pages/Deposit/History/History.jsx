import React from 'react'
import App from '../../layouts/App'
import Header from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

export default function History() {
    const navigate = useNavigate()

    return (
        <App title='Riwayat Deposit'>
            <Header />

            <div className='pb-10'>
                <div className='bg-white rounded-lg h-auto -mt-10 mx-3 p-4'>
                    <div className="flex items-center gap-2">
                        <div>
                            <img src="/images/icons/history.png" className='w-5 h-5' />
                        </div>
                        <div className='font-semibold text-lg text-gray-custom'>Riwayat Deposit</div>
                    </div>
                    <div className='mt-5 space-y-2'>
                        <div className='border-b-2 border-dashed border-gray-custom p-2 cursor-pointer' onClick={() => navigate('/payment/id')}>
                            <div className="flex items-center justify-between text-sm space-y-2">
                                <div>Rp. 50.000</div>
                                <div className='bg-yellow-300 rounded-full px-4 py-0.5 text-white font-semibold'>Pending</div>
                            </div>
                            <div className="flex items-center justify-between text-sm space-y-2">
                                <div>Bank BCA</div>
                                <div>09/02/2024 21:53</div>
                            </div>
                        </div>

                        <div className='border-b-2 border-dashed border-gray-custom p-2 cursor-pointer' onClick={() => navigate('/payment/id')}>
                            <div className="flex items-center justify-between text-sm space-y-2">
                                <div>Rp. 50.000</div>
                                <div className='bg-green-400 rounded-full px-4 py-0.5 text-white font-semibold'>Sukses</div>
                            </div>
                            <div className="flex items-center justify-between text-sm space-y-2">
                                <div>Bank BCA</div>
                                <div>09/02/2024 21:53</div>
                            </div>
                        </div>

                        <div className='border-b-2 border-dashed border-gray-custom p-2 cursor-pointer' onClick={() => navigate('/payment/id')}>
                            <div className="flex items-center justify-between text-sm space-y-2">
                                <div>Rp. 50.000</div>
                                <div className='bg-red-400 rounded-full px-4 py-0.5 text-white font-semibold'>Gagal</div>
                            </div>
                            <div className="flex items-center justify-between text-sm space-y-2">
                                <div>Bank BCA</div>
                                <div>09/02/2024 21:53</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
