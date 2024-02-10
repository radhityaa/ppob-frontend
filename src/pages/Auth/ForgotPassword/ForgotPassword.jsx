import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Guest from '../../layouts/Guest'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import InputFloating from '../../../components/InputFloating/InputFloating'

export default function ForgotPassword() {
    const navigate = useNavigate()

    return (
        <Guest title='Lupa Kata Sandi'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Lupa Kata Sandi</h1>
                <p className='font-semibold leading-5'>Link Verifikasi akan kami kirim ke email anda</p>
            </div>

            <div>
                <form className='pt-10'>
                    <div className='space-y-3 py-2'>
                        <InputFloating label={'Email'} type='email' color='white' required />
                    </div>

                    <div>
                        <p className='input-label'>Sudah ingat? <NavLink to={'/'} className={'underline'}>Login Sekarang</NavLink></p>
                    </div>

                    <div className='pt-10'>
                        <ButtonOutline onClick={() => navigate('/')}>Kirim Kode Verifikasi</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}
