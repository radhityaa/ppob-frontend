import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import InputFloating from '../../../components/InputFloating/InputFloating'
import Guest from '../../layouts/Guest'
import Axios from '../../../utils/Axios'
import { Notyf } from 'notyf'
import Cookies from 'js-cookie'

export default function Login() {
    const navigate = useNavigate()

    const notyf = new Notyf({
        position: {
            x: 'center',
            y: 'top'
        }
    })

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit(e) {
        e.preventDefault()
        const request = {
            username,
            password
        }

        await Axios.post('/auth/login', request)
            .then(res => {
                notyf.success(res.data.message)
                Cookies.set('token', res.data.data)
                navigate('/dashboard')
            })
            .catch(async err => {
                if (Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach(errorMessage => {
                        notyf.error(errorMessage.msg)
                    })
                } else {
                    notyf.error(err.response.data.message)
                    if (err.response.data.message === 'Akun Belum Verifikasi') {
                        await Axios.post('/otp/send', request)
                        navigate('/verifikasi')
                        Cookies.set('username', request.username)
                        Cookies.set('email', request.email)
                    }
                }
            })
    }

    return (
        <Guest title='Login'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Masuk</h1>
                <p className='leading-5'>Silahkan login ke akun <strong>{import.meta.env.VITE_APP_NAME}</strong></p>
            </div>

            <div>
                <form className='pt-10' onSubmit={onSubmit}>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='1' label={'Username'} color='white' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div>
                        <div className="flex items-center justify-end">
                            <NavLink to={'/forgot-password'} className='text-white hover:underline font-semibold text-sm'>Lupa Password?</NavLink>
                        </div>
                        <div className='-mt-2'>
                            <InputFloating tabIndex='2' label={'Password'} type='password' color='white' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>

                    <div className='mt-8'>
                        <p className='text-white'>Belum punya akun? <NavLink to={'/register'} className='underline font-semibold'>Daftar Sekarang</NavLink></p>
                        <p className='text-white'>Belum Verifikasi akun? <NavLink to={'/verifikasi'} className='underline font-semibold'>Verifikasi Sekarang</NavLink></p>
                    </div>

                    <div className='pt-7'>
                        <ButtonOutline type='submit'>Login</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}
