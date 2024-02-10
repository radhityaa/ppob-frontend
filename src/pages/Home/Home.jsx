import React from 'react'
import App from '../layouts/App'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'

export default function Home() {
    const navigate = useNavigate()

    return (
        <App>
            <Header />

            <div className='bg-white rounded-lg h-48 -mt-10 mx-3 p-4'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <div>
                            <img src="/images/wallet.png" alt="wallet" className='h-14 w-14' />
                        </div>
                        <div>
                            <div>
                                <h3 className='text-gray-custom font-medium'>Saldo</h3>
                            </div>
                            <div>
                                <h3 className='text-gray-custom font-semibold'>Rp. 1.000.000</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NavLink to={'/deposit'}>
                            <div className='border border-base text-base font-semibold px-6 py-1 rounded-full hover:bg-base hover:text-white transition duration-200 ease-in-out'>
                                Isi Saldo
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className='grid grid-cols-3 mt-8'>
                    <div className='flex justify-center cursor-pointer' onClick={() => navigate('/account')}>
                        <div className='flex-col'>
                            <img src="/images/user.png" alt="user" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-gray-custom text-center'>Akun</h4>
                        </div>
                    </div>

                    <div className='flex justify-center cursor-pointer'>
                        <div className='flex-col'>
                            <img src="/images/user.png" alt="user" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-gray-custom text-center'>Pemberitahuan</h4>
                        </div>
                    </div>

                    <div className='flex justify-center cursor-pointer'>
                        <div className='flex-col'>
                            <img src="/images/user.png" alt="user" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-gray-custom text-center'>Hubungi Kami</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg h-28 mx-3 mt-2 p-4 text-center'>
                <h1 className='text-xl font-bold'>Slider</h1>
            </div>

            <div className='bg-white h-24 mt-2 p-4 cursor-pointer'>
                <div className="flex justify-between gap-2">
                    <div>
                        <h1 className='text-base font-semibold text-lg'>Punya Kendala?</h1>
                        <h1 className='text-gray-custom text-sm'>Kamu bisa menghubungi tim customer server kami</h1>
                    </div>
                    <div>
                        <img src="/images/cs.png" alt="customer service" className='h-20 w-20' />
                    </div>
                </div>
            </div>

            {/* List 1 */}
            <div className='bg-white h-auto p-4 mt-2'>
                <div>
                    <p className='text-sm text-gray-custom font-semibold'>Isi Ulang Sehari-Hari</p>
                    <div className='border my-1' />
                </div>

                <div>
                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/pulsa.png" alt="Pulsa" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Pulsa</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/data.png" alt="Paket Data" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Data</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/phone.png" alt="Paket Tlp" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Tlp</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/chat.png" alt="Paket SMS" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket SMS</h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/token.png" alt="Token PLN" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Token PLN</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/sim.png" alt="Masa Aktif" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Masa Aktif</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* List 2 */}
            <div className='bg-white h-auto p-4 mt-2'>
                <div>
                    <p className='text-sm text-gray-custom font-semibold'>Dompet Digital</p>
                    <div className='border my-1' />
                </div>

                <div>
                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/pulsa.png" alt="Pulsa" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Pulsa</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/data.png" alt="Paket Data" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Data</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/phone.png" alt="Paket Tlp" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Tlp</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/chat.png" alt="Paket SMS" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket SMS</h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/token.png" alt="Token PLN" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Token PLN</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/sim.png" alt="Masa Aktif" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Masa Aktif</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* List 3 */}
            <div className='bg-white h-auto p-4 mt-2'>
                <div>
                    <p className='text-sm text-gray-custom font-semibold'>Tagihan</p>
                    <div className='border my-1' />
                </div>

                <div>
                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/pulsa.png" alt="Pulsa" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Pulsa</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/data.png" alt="Paket Data" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Data</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/phone.png" alt="Paket Tlp" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Tlp</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/chat.png" alt="Paket SMS" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket SMS</h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/token.png" alt="Token PLN" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Token PLN</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/sim.png" alt="Masa Aktif" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Masa Aktif</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* List 4 */}
            <div className='bg-white h-auto p-4 mt-2'>
                <div>
                    <p className='text-sm text-gray-custom font-semibold'>Produk Lainnya</p>
                    <div className='border my-1' />
                </div>

                <div>
                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/pulsa.png" alt="Pulsa" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Pulsa</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/data.png" alt="Paket Data" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Data</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/phone.png" alt="Paket Tlp" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket Tlp</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/chat.png" alt="Paket SMS" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Paket SMS</h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 mt-5'>
                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/token.png" alt="Token PLN" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Token PLN</h4>
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='flex-col w-full'>
                                <img src="/images/sim.png" alt="Masa Aktif" className='w-7 h-7 mx-auto' />
                                <h4 className='font-medium text-sm text-gray-custom text-center'>Masa Aktif</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
