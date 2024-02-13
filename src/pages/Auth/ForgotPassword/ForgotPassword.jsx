import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Guest from '../../layouts/Guest'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import InputFloating from '../../../components/InputFloating/InputFloating'
import Axios from "../../../utils/Axios"
import { showNotification } from '../../../utils/Notif'

export default function ForgotPassword() {
    const navigate = useNavigate()

    const [email, setEmail] = useState()

    async function onSubmit(e) {
        e.preventDefault()

        await Axios.post('/auth/forgot', { email: email })
            .then(res => {
                showNotification(res.data.message, 'success')
                navigate('/')
            })
            .catch(err => {
                if (Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach(errorMessage => {
                        showNotification(errorMessage.msg, 'error')
                    })
                } else {
                    showNotification(err.response.data.message, 'error')
                }
            })
    }

    return (
        <Guest title='Lupa Kata Sandi'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Lupa Kata Sandi</h1>
                <p className='font-semibold leading-5'>Link Verifikasi akan kami kirim ke email anda</p>
            </div>

            <div>
                <form className='pt-10' onSubmit={onSubmit}>
                    <div className='space-y-3 py-2'>
                        <InputFloating label={'Email'} type='email' value={email} onChange={(e) => setEmail(e.target.value)} color='white' required />
                    </div>

                    <div>
                        <p className='input-label'>Sudah ingat? <NavLink to={'/'} className={'underline'}>Login Sekarang</NavLink></p>
                    </div>

                    <div className='pt-10'>
                        <ButtonOutline type='submit'>Reset Password</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}
