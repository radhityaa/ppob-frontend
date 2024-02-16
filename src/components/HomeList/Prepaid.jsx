import { NavLink } from "react-router-dom"

export default function Prepaid() {
    return (
        <div className='bg-white h-auto p-4 mt-2'>
            <div>
                <p className='text-sm text-slate-500 font-semibold'>Isi Ulang Sehari-Hari</p>
                <div className='border my-1' />
            </div>

            <div>
                <div className='grid grid-cols-4 mt-5'>
                    <NavLink className='flex' to={'/prepaid/pulsa'}>
                        <div className='flex-col w-full'>
                            <img src="/images/smartphone.png" alt="Pulsa" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Pulsa</h4>
                        </div>
                    </NavLink>

                    <NavLink to={'/prepaid/internet'} className='flex'>
                        <div className='flex-col w-full'>
                            <img src="/images/data.png" alt="Paket Data" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Paket Data</h4>
                        </div>
                    </NavLink>

                    <NavLink to={'/prepaid/games'} className='flex'>
                        <div className='flex-col w-full'>
                            <img src="/images/games.png" alt="Paket Tlp" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Games</h4>
                        </div>
                    </NavLink>

                    <NavLink to={'/prepaid/voucher'} className='flex'>
                        <div className='flex-col w-full'>
                            <img src="/images/voucher.png" alt="Paket SMS" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Voucher Data</h4>
                        </div>
                    </NavLink>
                </div>

                <div className='grid grid-cols-4 mt-5'>
                    <NavLink to={'/prepaid/token'} className='flex'>
                        <div className='flex-col w-full'>
                            <img src="/images/token.png" alt="Token PLN" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Token PLN</h4>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}