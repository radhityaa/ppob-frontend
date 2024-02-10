import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Guest from '../../layouts/Guest'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import { FloatingLabel } from 'flowbite-react'

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
                        <FloatingLabel variant="standard" label="Username" className='text-white peer-focus:text-white focus:border-white' required />
                    </div>
                    <div>
                        <div className="flex items-center justify-end">
                            <NavLink to={'/forgot-password'} className='text-white hover:underline font-semibold text-sm'>Lupa Password?</NavLink>
                        </div>
                        <div className='-mt-2'>
                            <FloatingLabel variant="standard" label="Password" type='password' className='text-white peer-focus:text-white focus:border-white' required />
                        </div>
                    </div>

                    <div className='mt-8'>
                        <p className='text-white'>Belum punya akun? <NavLink to={'/register'} className='underline font-semibold'>Daftar Sekarang</NavLink></p>
                    </div>

                    <div className='pt-7'>
                        <ButtonOutline onClick={() => navigate('/dashboard')}>Login</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}
