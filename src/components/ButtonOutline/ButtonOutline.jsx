import React from 'react'

export default function ButtonOutline({ onClick, children }) {
    return (
        <button onClick={onClick} className='w-full bg-white border-2 rounded-xl py-2 font-semibold text-base hover:bg-base/75 hover:text-white transition duration-300 ease-in-out'>{children}</button>
    )
}
