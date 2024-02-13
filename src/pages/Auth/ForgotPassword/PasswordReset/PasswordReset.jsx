import { useEffect, useState } from "react";
import Guest from "../../../layouts/Guest";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../../utils/Axios"
import { showNotification } from "../../../../utils/Notif";
import InputFloating from "../../../../components/InputFloating/InputFloating";
import ButtonOutline from "../../../../components/ButtonOutline/ButtonOutline";

export default function PasswordReset() {
    const navigate = useNavigate()

    const [password, setPassword] = useState()
    const { user, token } = useParams()

    useEffect(() => {
        if (!user || !token) {
            navigate('/')
        }
    }, [])

    async function onSubmit(e) {
        e.preventDefault()

        await Axios.post(`/auth/password-reset/${user}/${token}`, { password, password })
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
                    showNotification(err.response?.data?.message, 'error')
                }
            })
    }

    return (
        <Guest title='Reset Password'>
            <div className="space-y-3 text-center text-white">
                <h1 className='text-2xl font-bold'>Reset Password</h1>
                <p className='leading-5'>Silahkan Masukan Password Baru Anda</p>
            </div>

            <div>
                <form className='pt-10' onSubmit={onSubmit}>
                    <div className='space-y-3 py-2'>
                        <InputFloating tabIndex='1' type='password' label={'Password Baru'} color='white' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className='pt-7'>
                        <ButtonOutline type='submit'>Reset</ButtonOutline>
                    </div>
                </form>
            </div>
        </Guest>
    )
}