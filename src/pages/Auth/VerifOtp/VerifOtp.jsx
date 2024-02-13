import React, { useEffect, useRef, useState } from 'react'
import Guest from '../../layouts/Guest'
import Input from '../../../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'
import Axios from '../../../utils/Axios'
import Cookies from 'js-cookie'
import { showNotification } from '../../../utils/Notif'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCountdown, startCountdown } from '../../../features/otpSlice'
import InputFloating from '../../../components/InputFloating/InputFloating'

export default function VerifOtp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { canResend, countdown } = useSelector((state) => state.otp)
    const [send, setSend] = useState(false)
    const [email, setEmail] = useState()

    const [otp, setOTP] = useState(["", "", "", "", ""])
    const otpInputs = Array.from({ length: 5 }, (_, i) => i)
    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ])

    useEffect(() => {
        const email = Cookies.get('email')

        if (!email) {
            setSend(false)
        }

        dispatch(startCountdown())

        const interval = setInterval(() => {
            dispatch(decrementCountdown())
        }, 1000)

        return () => clearInterval(interval)
    }, [dispatch])

    async function handleResend(e) {
        e.preventDefault()

        await Axios.post('/otp/send', { email: Cookies.get('email') })
            .then(res => showNotification(res.data.message, 'success'))
            .catch(err => showNotification(err.response?.data?.message, 'error'))

        dispatch(startCountdown())
    }

    async function verifOtp(otp) {
        await Axios.post('/otp/validation', {
            email: Cookies.get('email'),
            code: parseInt(otp.join(''))
        })
            .then(res => {
                showNotification(res.data.message, 'success')
                Cookies.set('token', res.data.data.token)
                Cookies.remove('email')
                navigate('/dashboard')
            })
            .catch(err => showNotification(err.response?.data?.message, 'error'))
    }

    const handleInputChange = (e, index) => {
        const value = e.target.value

        if (/^[0-9]*$/.test(value) && value.length <= 1) {
            const newOTP = [...otp]
            newOTP[index] = value
            setOTP(newOTP)

            // NOTE - Pindah ke input berikutnya jika tersedia
            if (index < otpInputs.length - 1 && value) {
                inputRefs.current[index + 1].current.focus()
            } else if (index == otpInputs.length - 1 && value) {
                verifOtp(newOTP)
            }
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && index > 0 && otp[index] === "") {
            // NOTE - Jika tombol backspace dan input kosong, pindah ke input sebelumnya
            inputRefs.current[index - 1].current.focus()
        }
    }

    async function handleSendOtp(e) {
        e.preventDefault()

        await Axios.post('/otp/send', {
            email: email
        })
            .then(res => {
                Cookies.set('email', email)
                showNotification(res.data.message, 'success')
                setSend(true)
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
        <Guest title="Verifikasi OTP">
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Masukan Kode OTP</h1>
                <p className='font-semibold leading-5'>Periksa email kamu, dan masukan kode OTP disini.</p>
            </div>

            {send ? (
                <form action="#" className='py-10'>
                    <div className='flex items-center justify-center gap-3'>
                        {otpInputs.map((value, index) => (
                            <div key={index}>
                                <Input.input
                                    className='rounded w-14 text-center'
                                    key={index}
                                    value={otp[index]}
                                    onChange={(e) => handleInputChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    refProp={inputRefs.current[index]}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="py-5 text-center mx-auto">
                        <p className='input-label'>Tidak menerima kode ?</p>
                        {canResend ? (
                            <button className='font-semibold text-white' onClick={(e) => handleResend(e)}>Kirim ulang</button>
                        ) : (
                            <button className='font-semibold text-white cursor-not-allowed' type='button'>Kirim ulang <span className='text-white'>({countdown})</span></button>
                        )}
                    </div>
                </form>
            ) : (
                <form className='pt-10' onSubmit={handleSendOtp}>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='1' label={'Email'} color='white' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className='pt-7'>
                        <ButtonOutline type='submit'>Kirim OTP</ButtonOutline>
                    </div>
                </form>
            )}


        </Guest>
    )
}
