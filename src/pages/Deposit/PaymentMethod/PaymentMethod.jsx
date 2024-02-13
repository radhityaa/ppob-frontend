import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import App from '../../layouts/App'
import Axios from '../../../utils/Axios'
import { showNotification } from '../../../utils/Notif'
import { Disclosure } from '@headlessui/react'
import ChevronUp from '../../../components/ChevronUp/ChevronUp'
import Cookies from 'js-cookie'

export default function PaymentMethod() {
    const navigate = useNavigate()
    const [channels, setChannels] = useState([])

    async function getChannels() {
        await Axios.get('/tripay/channels')
            .then(res => setChannels(res.data.data.data))
            .catch(err => showNotification(err.response?.data?.message, 'error'))
    }

    useEffect(() => {
        getChannels()
    }, [])

    async function handlePayment(code) {
        await Axios.post('/deposit', {
            nominal: Cookies.get('nominal'),
            method: code,
            type: 'otomatis'
        })
            .then(res => {
                showNotification(res.data.message, 'success')
                navigate(`/payment/${res.data.data.reference}`)
            })
            .catch(err => showNotification(err.response?.data?.message, 'error'))
    }

    async function handlePaymentManual() {
        await Axios.post('/deposit', {
            nominal: Cookies.get('nominal'),
            method: 'Manual',
            type: 'manual'
        })
            .then(res => {
                showNotification(res.data.message, 'success')
                navigate(`/payment/${res.data.data.reference}`)
            })
            .catch(err => showNotification(err.response?.data?.message, 'error'))
    }

    return (
        <App title='Metode Pembayaran'>
            <Header />

            <div className='bg-white rounded-lg -mt-10 mx-3 p-4'>
                <div className='font-semibold text-lg text-gray-custom'>Pilih Metode Pembayaran</div>
                <div className='mt-5'>

                    <div className="w-full rounded-2xl bg-white">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>Otomatis (Admin)</span>
                                        <ChevronUp
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
                                        {channels.map((item, index) => (
                                            <div className='border-2 border-dashed px-2 mb-3' key={index}>
                                                <div className="flex items-center gap-5 cursor-pointer" onClick={() => handlePayment(item.code)}>
                                                    <div>
                                                        <img src={item.icon_url} className='w-32 h-16 object-contain' />
                                                    </div>
                                                    <div className='py-2'>
                                                        <div className='font-semibold'>{item.name}</div>
                                                        <div className='text-xs text-gray-custom'>{item.group}</div>
                                                        <div className='text-xs text-gray-custom'>Biaya Admin: {item.total_fee?.flat}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>Manual (Free Admin)</span>
                                        <ChevronUp
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                        <div className='border-2 border-dashed px-2 mb-3'>
                                            <div className="flex items-center gap-5 cursor-pointer" onClick={() => handlePaymentManual()}>
                                                <div className='py-2'>
                                                    <div className='font-semibold'>Manual</div>
                                                    <div className='text-xs text-gray-custom'>Konfirmasi Admin</div>
                                                    <div className='text-xs text-gray-custom'>Biaya Admin: 0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </App>
    )
}
