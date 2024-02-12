import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailUser } from '../../features/userSlice'
import Cookies from 'js-cookie'

export default function Header() {
    const dispatch = useDispatch()
    const token = Cookies.get('token')
    const { user, loading } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(detailUser(token))
    }, [])

    return (
        <div className='h-32 bg-base w-full px-3 py-2'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className='text-white font-semibold'>Hai, {user?.name.split(" ")[0]}</h3>
                    </div>
                    <div>
                        <div className='bg-yellow-500 rounded-full py-1 px-3 text-sm text-white'>
                            0 trx
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
