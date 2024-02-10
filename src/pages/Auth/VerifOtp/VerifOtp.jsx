import React, { useRef, useState } from 'react'
import Guest from '../../layouts/Guest'
import Input from '../../../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import ButtonOutline from '../../../components/ButtonOutline/ButtonOutline'

export default function VerifOtp() {
    const navigate = useNavigate()
    const [otp, setOTP] = useState(["", "", "", "", ""])
    const otpInputs = Array.from({ length: 5 }, (_, i) => i)
    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()

    ])

    const handleInputChange = (e, index) => {
        const value = e.target.value

        if (/^[0-9]*$/.test(value) && value.length <= 1) {
            const newOTP = [...otp]
            newOTP[index] = value
            setOTP(newOTP)

            // NOTE - Pindah ke input berikutnya jika tersedia
            if (index < otpInputs.length - 1 && value) {
                inputRefs.current[index + 1].current.focus()
            }
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && index > 0 && otp[index] === "") {
            // NOTE - Jika tombol backspace dan input kosong, pindah ke input sebelumnya
            inputRefs.current[index - 1].current.focus()
        }
    }

    return (
        <Guest title="Verifikasi OTP">
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Masukan Kode OTP</h1>
                <p className='font-semibold leading-5'>Periksa email kamu, dan masukan kode OTP disini.</p>
            </div>

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
                    <button className='font-semibold text-white'>Kirim ulang <span className='text-white'>(29)</span></button>
                </div>

                <ButtonOutline>Verifikasi</ButtonOutline>
            </form>

        </Guest>
    )
}
