import { Tab } from "@headlessui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import App from "../layouts/App";

export default function Saldo() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let [categories] = useState({
        Semua: [
            {
                id: 1,
                title: 'Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123',
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'debit'
            },
            {
                id: 2,
                title: "Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123",
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'kredit'
            },
            {
                id: 3,
                title: 'Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123',
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'debit'
            },
            {
                id: 4,
                title: "Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123",
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'kredit'
            },
        ],
        Debit: [
            {
                id: 1,
                title: 'Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123',
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'debit'
            },
            {
                id: 2,
                title: 'Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123',
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'debit'
            },
        ],
        Kredit: [
            {
                id: 1,
                title: 'Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123',
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'kredit'
            },
            {
                id: 2,
                title: 'Pembayaran order PLN - TOKEN PLN 100RB / Trx-128398123',
                amount: '100.150',
                date: '01/02/2024 17:49',
                status: 'kredit'
            },
        ],
    })

    return (
        <App title='Saldo'>
            <Header />

            <div className='bg-white rounded-lg -mt-10 mx-3 p-4'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <div>
                            <img src="/images/wallet.png" alt="wallet" className='h-14 w-14' />
                        </div>
                        <div>
                            <div>
                                <h3 className='text-gray-custom font-medium'>Saldo</h3>
                            </div>
                            <div>
                                <h3 className='text-gray-custom font-semibold'>Rp. 1.000.000</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NavLink to={'/deposit'}>
                            <div className='border border-base text-base font-semibold px-6 py-1 rounded-full hover:bg-base hover:text-white transition duration-200 ease-in-out'>
                                Isi Saldo
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="w-full mt-5">
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
                                                    <h3 className="text-xs font-medium leading-5 w-3/4">
                                                        {post.title}
                                                    </h3>

                                                    <ul className={`flex space-x-1 items-center text-xs font-normal leading-4 text-${post.status === 'debit' ? 'red' : 'green'}-500`}>
                                                        {post.status === 'debit' ? '-' : '+'} <li className="font-semibold">{post.amount}</li>
                                                    </ul>
                                                </div>
                                                <p className='text-[11px] text-gray-custom mt-2'>{post.date}</p>
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