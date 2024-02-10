import { Button, FloatingLabel } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import InputFloating from "../../../components/InputFloating/InputFloating";
import App from "../../layouts/App";

export default function UpdateAccount() {
    const navigate = useNavigate()
    const [changePassword, setChangePassword] = useState(false)

    return (
        <App title='Edit Profil'>
            <Header />

            <div className='text-center -mt-[90px]'>
                <div className='text-white font-bold'>ramaadit123</div>
                <div className='text-white text-xs'>0895347113987</div>
            </div>

            <div className="mt-5">
                {changePassword ? (
                    <div className="bg-white h-auto shadow p-5 space-y-10">
                        <InputFloating label={'Password Lama'} required />
                        <InputFloating label={'Password Baru'} required />
                        <InputFloating label={'PIN'} required />

                        <div className="flex items-center justify-center gap-3">
                            <Button color='purple' className="w-full">Simpan</Button>
                            <Button color='dark' className="w-full" onClick={() => setChangePassword(false)}>Batal</Button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white h-auto shadow p-5 space-y-10">
                        <FloatingLabel variant="standard" label="Nama Lengkap" defaultValue='Rama Adhitya Setiadi' className='text-base text-sm peer-focus:text-base focus:border-base border-base' required />
                        <FloatingLabel variant="standard" label="Username" defaultValue='ramaadit123' className='text-base text-sm peer-focus:text-base focus:border-base border-base' disabled />
                        <FloatingLabel variant="standard" label="Email" defaultValue='ramaadhityasetiadi002@gmail.com' className='text-base text-sm peer-focus:text-base focus:border-base border-base' disabled />
                        <FloatingLabel variant="standard" label="Nomor HP" defaultValue='0895347113984' className='text-base text-sm peer-focus:text-base focus:border-base border-base' />

                        <div className="flex items-center justify-center gap-3">
                            <Button color='purple' className="w-full" onClick={() => setChangePassword(true)}>Ubah Password</Button>
                            <Button color='dark' className="w-full" onClick={() => navigate('/account')}>Batal</Button>
                        </div>
                    </div>
                )}
            </div>

        </App>
    )
}