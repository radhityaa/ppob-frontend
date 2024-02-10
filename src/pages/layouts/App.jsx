import React from 'react'
import Navigation from './Navigation'

export default function App(props) {
    const { title, children } = props

    document.title = title ? title + ' - ' + import.meta.env.VITE_APP_NAME : import.meta.env.VITE_APP_NAME

    return (
        <>
            <main className='lg:mx-auto w-full lg:w-96 min-h-screen bg-slate-100'>
                {children}
            </main>
            <Navigation />
        </>
    )
}
