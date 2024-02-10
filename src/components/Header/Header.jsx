import React from 'react'

export default function Header() {
    return (
        <div className='h-32 bg-base w-full px-3 py-2'>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className='text-white font-semibold'>Hai, Nama</h3>
                </div>
                <div>
                    <div className='bg-yellow-500 rounded-full py-1 px-3 text-sm text-white'>
                        0 trx
                    </div>
                </div>
            </div>
        </div>
    )
}
