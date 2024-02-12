import { useState } from "react";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import App from "../layouts/App";
import { Tab } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export default function Notification() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    let [categories] = useState({
        Semua: [
            {
                id: 1,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: true,
                url: '/notification/id'
            },
            {
                id: 2,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: true,
                url: '/notification/id'
            },
            {
                id: 3,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: false,
                url: '/notification/id'
            },
            {
                id: 4,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: false,
                url: '/notification/id'
            },
        ],
        "Belum Dibaca": [
            {
                id: 1,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: false,
                url: '/notification/id'
            },
            {
                id: 2,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: false,
                url: '/notification/id'
            },
        ],
        Dibaca: [
            {
                id: 1,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: true,
                url: '/notification/id'
            },
            {
                id: 2,
                title: 'Status Order #123124123',
                date: '12/02/2024 08:28',
                desc: 'Trx #214213214124 TRIREG1.0895347113987 SUKSES. SN: R024123213213213213213213c',
                isRead: true,
                url: '/notification/id'
            },
        ],
    })

    return (
        <App title='Pemberitahuan'>
            <SimpleHeader title={'Pemberitahuan'} />

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
                                            className={`relative p-3 hover:bg-gray-100 ${post.isRead ? '' : 'bg-gray-200'} border-b-2 space-y-2`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-medium">
                                                    {post.title}
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    {post.date}
                                                </div>
                                            </div>

                                            <div className="text-xs line-clamp-1">
                                                {post.desc}
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