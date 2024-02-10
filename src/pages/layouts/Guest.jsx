import React from 'react'

export default function Guest(props) {
    const { title, children } = props

    document.title = title ? title + ' - ' + import.meta.env.VITE_APP_NAME : import.meta.env.VITE_APP_NAME

    return (
        <main className='lg:mx-auto lg:w-96 px-10 py-7 bg-violet-600 min-h-screen'>
            {children}
        </main>
    )
}
