import { Tab } from "@headlessui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import App from "../layouts/App";

export default function Transaction() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let [categories] = useState({
        Semua: [
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
        ],
        Sukses: [
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
        ],
        "Dalam Proses": [
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
        ],
        "Menunggu Pembayaran": [
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
        ],
        Gagal: [
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
        ],
    })

    return (
        <App title='Transaksi'>
            <SimpleHeader title={'Transaksi'}/>

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
        </App>
    )
}