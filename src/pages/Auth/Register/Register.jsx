import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import InputFloating from '../../../components/InputFloating/InputFloating'
import Guest from '../../layouts/Guest'
import Axios from '../../../utils/Axios'
import Cookies from 'js-cookie'
import { showNotification } from '../../../utils/Notif'

export default function Register() {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [pin, setPin] = useState()

    async function onSubmit(e) {
        e.preventDefault()

        await Axios.post('/auth/register', {
            name, email, username, phone, password, pin
        })
            .then(res => {
                Cookies.set('username', res.data.data.username)
                Cookies.set('email', res.data.data.email)
                navigate('/verifikasi')
                showNotification(res.data.message, 'success')
            })
            .catch(err => showNotification(err.response.data.message, 'error'))
    }

    return (
        <Guest title='Pendaftaran Akun'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Pendaftaran Akun</h1>
                <p className='font-semibold leading-5'>Silahkan isi formulir dibawah dengan tepat dan benar. Kami akan mengirimkan kode OTP ke Email yang kamu daftarkan.</p>
            </div>

            <div>
                <form className='pt-10' onSubmit={onSubmit}>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='1' label={'Nama Lengkap'} color='white' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='2' label={'Username'} type='text' color='white' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='3' label={'Email'} type='email' color='white' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='4' label={'Nomor HP'} type='number' color='white' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='5' label={'Password'} type='password' color='white' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='6' label={'PIN'} type='number' color='white' value={pin} onChange={(e) => setPin(e.target.value)} required />
                    </div>

                    <div>
                        <p className='input-label'>Sudah punya akun? <NavLink to={'/'} className={'underline'}>Login Sekarang</NavLink></p>
                    </div>

                    <div className='pt-10'>
                        <ButtonOutline type='submit'>Daftar</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}
