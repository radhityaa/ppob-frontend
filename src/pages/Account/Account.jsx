import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import PencilSquare from '../../components/PencilSquare/PencilSquare'
import App from '../layouts/App'

export default function Account() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let [categories] = useState({
        Menu: [
            {
                id: 1,
                title: 'Transaksi',
                value: '0',
                url: '/transaction'
            },
            {
                id: 2,
                title: "Saldo",
                value: 'Rp. 50.000',
                url: '/saldo'
            },
            {
                id: 3,
                title: "Pemberitahuan",
                value: '',
                url: '/notification'
            },
            {
                id: 4,
                title: "Hubungi CS",
                value: '',
                url: '/customer-service'
            },
            {
                id: 5,
                title: "Pengaturan",
                value: '',
                url: '/setting'
            },
            {
                id: 6,
                title: "Keluar",
                value: '',
                url: '/'
            },
        ],
        Profil: [
            {
                id: 1,
                title: 'Nama Lengkap',
                value: 'Rama Adhitya Setiadi',
                url: '#3'
            },
            {
                id: 2,
                title: 'Username',
                value: 'ramaadit123',
                url: '#4'
            },
            {
                id: 3,
                title: 'Email',
                value: 'ramaadhityasetiadi002@gmail.com',
                url: '#4'
            },
            {
                id: 4,
                title: 'Nomor HP',
                value: '0895347113987',
                url: '#4'
            },
            {
                id: 5,
                title: 'Status Akun',
                value: 'Terverifikasi',
                url: '#4'
            },
            {
                id: 6,
                title: 'Tanggal Mendaftar',
                value: '20/12/2021 07:07',
                url: '#4'
            },
        ],
    })

    return (
        <App title='Profil'>
            <Header />

            <div className='text-center -mt-[90px]'>
                <div className='text-white font-bold'>ramaadit123</div>
                <div className='text-white text-xs'>0895347113987</div>
                <NavLink to={'/account/id'} className='mt-2 flex justify-center text-white cursor-pointer'><PencilSquare /></NavLink>
            </div>

            <div className='mt-5'>
                <div className="w-full">
                    <Tab.Group>
                        <Tab.List className="flex bg-blue-900/20">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-sm font-medium leading-5',
                                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                                            selected
                                                ? 'bg-white text-base shadow border-b-2 border-base'
                                                : 'text-base bg-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'bg-white',
                                        'focus:outline-none'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative p-3 hover:bg-gray-100"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-medium leading-5">
                                                        {post.title}
                                                    </h3>

                                                    <ul className="flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                        <li>{post.value}</li>
                                                    </ul>
                                                </div>

                                                <NavLink
                                                    to={post.url}
                                                    className={classNames(
                                                        'absolute inset-0',
                                                        'focus:z-10 focus:outline-none'
                                                    )}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </App>
    )
}
