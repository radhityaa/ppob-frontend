import React, { useEffect, useState } from 'react'
import App from '../../layouts/App'
import Header from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Axios from '../../../utils/Axios'
import { showNotification } from '../../../utils/Notif'
import FormatCurrency from '../../../utils/FormatCurrency'
import FormatDate from '../../../utils/FormatDate'

export default function History() {
    const navigate = useNavigate()
    const [data, setData] = useState()

    async function fetchData() {
        await Axios.get('/deposit')
            .then(res => setData(res.data.data))
            .catch(err => showNotification(err.response?.data?.message, 'error'))
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                        {data?.map((item, index) => (
                            <div className='border-b-2 border-dashed border-gray-custom p-2 cursor-pointer' onClick={() => navigate(`/payment/${item.reference}`)} key={index}>
                                <div className="flex items-center justify-between text-sm space-y-2">
                                    <div>{FormatCurrency(item.amount)}</div>
                                    <div className={`bg-${item.status === 'PAID' ? 'green' : item.status === 'UNPAID' ? 'yellow' : 'red'}-400 rounded-full px-4 py-0.5 text-white font-semibold`}>{item.status === 'PAID' ? 'Sukses' : item.status === 'UNPAID' ? 'Pending' : 'Gagal'}</div>
                                </div>
                                <div className="flex items-center justify-between text-sm space-y-2">
                                    <div>{item.payment_name}</div>
                                    <div>{FormatDate(item.createdAt)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </App>
    )
}
