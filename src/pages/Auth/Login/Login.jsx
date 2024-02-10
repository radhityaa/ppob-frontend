import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Guest from '../../layouts/Guest'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'

export default function Login() {
    const navigate = useNavigate()

    return (
        <Guest title='Login'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Masuk</h1>
                <p className='leading-5'>Silahkan login ke akun <strong>{import.meta.env.VITE_APP_NAME}</strong></p>
            </div>

            <div>
                <form className='pt-10'>
                    <div className='space-y-3 py-2'>
                        <label htmlFor="username" className='input-label'>Username</label>
                        <input type="text" id='username' name='username' className='w-full input' placeholder='username' required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className='input-label'>Password</label>
                            <NavLink to={'/forgot-password'} className='text-white hover:underline font-semibold'>Lupa Password?</NavLink>
                        </div>
                        <input type="password" id='password' name='password' className='w-full input' placeholder='******' required />
                    </div>

                    <div>
                        <p className='text-white'>Belum punya akun? <NavLink to={'/register'} className='underline font-semibold'>Daftar Sekarang</NavLink></p>
                    </div>

                    <div className='pt-10'>
                        <ButtonOutline onClick={() => navigate('/dashboard')}>Login</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}
