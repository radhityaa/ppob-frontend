import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import PencilSquare from '../../components/PencilSquare/PencilSquare'
import FormatCurrency from '../../utils/FormatCurrency'
import FormatDate from '../../utils/FormatDate'
import { showNotification } from '../../utils/Notif.js'
import App from '../layouts/App'
import Axios from '../../utils/Axios.js'

export default function Account() {
    const { user, loading } = useSelector((state) => state.user)
    const navigate = useNavigate()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    async function handleLogout() {
        await Axios.delete('/users/logout')
            .then(res => {
                showNotification(res.data.message, 'success')
                navigate('/')
            })
            .catch(err => showNotification(err.response?.data?.message, 'error'))
    }

    const [categories, setCategories] = useState({
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
                value: '',
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
                url: '#',
                onClick: () => handleLogout()
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

    useEffect(() => {
        if (user) {
            const saldoFormatted = FormatCurrency(user.saldo)
            setCategories(prevCategories => ({
                ...prevCategories,
                Menu: prevCategories.Menu.map(item => item.title === 'Saldo' ? { ...item, value: saldoFormatted } : item)
            }))

            const updatedProfile = [
                {
                    id: 1,
                    title: 'Nama Lengkap',
                    value: user.name
                },
                {
                    id: 2,
                    title: 'Username',
                    value: user.username
                },
                {
                    id: 3,
                    title: 'Email',
                    value: user.email
                },
                {
                    id: 4,
                    title: 'Nomor HP',
                    value: user.phone
                },
                {
                    id: 5,
                    title: 'Status Akun',
                    value: user.status ? 'Terverifikasi' : 'Belum Verifikasi'
                },
                {
                    id: 6,
                    title: 'Tanggal Mendaftar',
                    value: FormatDate(user.createdAt)
                },
            ]
            setCategories(prevCategories => ({
                ...prevCategories,
                Profil: updatedProfile
            }))
        }
    }, [user])

    return (
        <App title='Profil'>
            <Header />

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='text-center -mt-[90px]'>
                    <div className='text-white font-bold'>{user?.username}</div>
                    <div className='text-white text-xs'>{user?.phone}</div>
                    <NavLink to={'/account/id'} className='mt-2 flex justify-center text-white cursor-pointer'><PencilSquare /></NavLink>
                </div>
            )}

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
                                                    onClick={post.onClick}
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
