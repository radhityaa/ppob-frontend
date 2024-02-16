export default function Bill() {
    return (
        <div className='bg-white h-auto p-4 mt-2'>
            <div>
                <p className='text-sm text-slate-500 font-semibold'>Tagihan</p>
                <div className='border my-1' />
            </div>

            <div>
                <div className='grid grid-cols-4 mt-5'>
                    <div className='flex cursor-pointer'>
                        <div className='flex-col w-full'>
                            <img src="/images/pulsa.png" alt="Pulsa" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Pulsa</h4>
                        </div>
                    </div>

                    <div className='flex cursor-pointer'>
                        <div className='flex-col w-full'>
                            <img src="/images/data.png" alt="Paket Data" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Paket Data</h4>
                        </div>
                    </div>

                    <div className='flex cursor-pointer'>
                        <div className='flex-col w-full'>
                            <img src="/images/phone.png" alt="Paket Tlp" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Paket Tlp</h4>
                        </div>
                    </div>

                    <div className='flex cursor-pointer'>
                        <div className='flex-col w-full'>
                            <img src="/images/chat.png" alt="Paket SMS" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Paket SMS</h4>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 mt-5'>
                    <div className='flex cursor-pointer'>
                        <div className='flex-col w-full'>
                            <img src="/images/token.png" alt="Token PLN" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Token PLN</h4>
                        </div>
                    </div>

                    <div className='flex cursor-pointer'>
                        <div className='flex-col w-full'>
                            <img src="/images/sim.png" alt="Masa Aktif" className='w-7 h-7 mx-auto' />
                            <h4 className='font-medium text-sm text-slate-500 text-center'>Masa Aktif</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}