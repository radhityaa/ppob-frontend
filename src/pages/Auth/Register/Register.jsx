import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Guest from '../../layouts/Guest'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'

export default function Register() {
    const navigate = useNavigate()

    return (
        <Guest title='Pendaftaran Akun'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Pendaftaran Akun</h1>
                <p className='font-semibold leading-5'>Silahkan isi formulir dibawah dengan tepat dan benar. Kami akan mengirimkan kode OTP ke Email yang kamu daftarkan.</p>
            </div>

            <div>
                <form className='pt-10'>
                    <div className='space-y-3 py-2'>
                        <label htmlFor="name" className='input-label'>Nama Lengkap*</label>
                        <input type="text" className='w-full input' placeholder='Rama Adhitya Setiadi' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <label htmlFor="email" className='input-label'>Alamat Email*</label>
                        <input type="text" className='w-full input' placeholder='example@gmail.com' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <label htmlFor="phone" className='input-label'>Nomor HP*</label>
                        <input type="number" className='w-full input' placeholder='0895347xxxxxx' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <label htmlFor="password" className='input-label'>Password*</label>
                        <input type="password" className='w-full input' placeholder='*****' required />
                    </div>

                    <div>
                        <p className='input-label'>Sudah punya akun? <NavLink to={'/'} className={'underline'}>Login Sekarang</NavLink></p>
                    </div>

                    <div className='pt-10'>
                        <ButtonOutline onClick={() => navigate('/verifikasi')}>Daftar</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}