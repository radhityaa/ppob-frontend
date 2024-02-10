import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Guest from '../../layouts/Guest'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import { FloatingLabel } from 'flowbite-react'
import InputFloating from '../../../components/InputFloating/InputFloating'

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
                        <InputFloating label={'Nama Lengkap'} color='white' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating label={'Email'} type='email' color='white' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating label={'Nomor HP'} type='number' color='white' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating label={'Password'} type='password' color='white' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating label={'PIN'} type='number' color='white' required />
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
