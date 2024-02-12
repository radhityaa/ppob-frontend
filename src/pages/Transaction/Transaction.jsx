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
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Sukses',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 2,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Sukses',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 3,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Pending',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 4,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Pending',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 5,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Menunggu Pembayaran',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 6,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Menunggu Pembayaran',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 7,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Gagal',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 8,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Gagal',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
        ],
        Sukses: [
            {
                id: 1,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Sukses',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 2,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Sukses',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
        ],
        Pending: [
            {
                id: 1,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Pending',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 2,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Pending',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
        ],
        Pembayaran: [
            {
                id: 1,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Menunggu Pembayaran',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 2,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Menunggu Pembayaran',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
        ],
        Gagal: [
            {
                id: 1,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Gagal',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
            {
                id: 2,
                name: 'Three Rp 1.000',
                target: '0895347113987',
                brand: 'Three',
                price: '1.328',
                status: 'Gagal',
                date: '12/02/2024 08:28',
                url: '/transaction/id'
            },
        ],
    })

    return (
        <App title='Transaksi'>
            <SimpleHeader title={'Transaksi'} />

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
                                    'bg-white h-auto',
                                    'focus:outline-none'
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 hover:bg-gray-100 border-b-2"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-medium">
                                                    {post.name}
                                                </div>
                                                <div className={`
                                                    text-xs text-white px-4 py-0.5 rounded-full
                                                    bg-${post.status === 'Sukses'
                                                        ? 'green'
                                                        : post.status === 'Pending'
                                                            ? 'yellow'
                                                            : post.status === 'Menunggu Pembayaran'
                                                                ? 'gray'
                                                                : 'red'}-400
                                                `}>
                                                    {post.status}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex gap-5 text-sm text-slate-500">
                                                    <div>{post.target}</div>
                                                    <div>{post.brand}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between gap-5 text-sm text-slate-500">
                                                    <div>{post.date}</div>
                                                    <div className="font-semibold">Rp. {post.price}</div>
                                                </div>
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