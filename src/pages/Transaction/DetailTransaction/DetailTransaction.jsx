import { Dialog, Menu, Transition } from "@headlessui/react"
import { Button } from "flowbite-react"
import { Fragment, useState } from "react"
import { NavLink } from "react-router-dom"
import ArrowLeftCircleIcon from "../../../components/ArrowLeftCircleIcon/ArrowLeftCircleIcon"
import EditActiveIcon from "../../../components/EditActiveIcon/EditActiveIcon"
import EditInactiveIcon from "../../../components/EditInactiveIcon/EditInactiveIcon"
import Header from "../../../components/Header/Header"
import InputFloating from "../../../components/InputFloating/InputFloating"
import MoveActiveIcon from "../../../components/MoveActiveIcon/MoveActiveIcon"
import MoveInactiveIcon from "../../../components/MoveInactiveIcon/MoveInactiveIcon"
import PrinterIcon from "../../../components/PrinterIcon/PrinterIcon"
import StarIcon from "../../../components/StarIcon/StarIcon"
import App from "../../layouts/App"
import { FaStar } from 'react-icons/fa'

export default function DetailTransaction() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <>
            <App title='Rincian Transaksi'>
                <Header />

                <div className='bg-white rounded-lg h-auto -mt-10 mx-3 p-4'>
                    <div className="text-center font-semibold text-lg tracking-wide">Rincian Transaksi</div>

                    <div className="grid grid-cols-2 mt-3">
                        <div className="text-slate-700 leading-10">
                            <div>Tanggal</div>
                            <div>ID Transaksi</div>
                            <div>Produk</div>
                            <div>Brand</div>
                            <div>Kategori</div>
                            <div>Tujuan</div>
                            <div>Pembayaran</div>
                            <div>SN/Ref</div>
                            <div>Status</div>
                        </div>
                        <div className="text-slate-800 font-medium leading-10">
                            <div>12/02/2024 12:12</div>
                            <div>INV-TYJ12312JW</div>
                            <div>Rp. 1.000</div>
                            <div>Three</div>
                            <div>Pulsa</div>
                            <div>0895347113987</div>
                            <div>BCA Virtual Account</div>
                            <div>R2242416909775</div>
                            <div>Sukses</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-5 font-semibold text-slate-800 text-lg border-t-2 py-2 border-dashed">
                        <div>Total</div>
                        <div>Rp. 1.326</div>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 mx-3">
                    <Button color="dark" className="w-full">
                        <NavLink to={-1} className="flex items-center gap-1">
                            <span><ArrowLeftCircleIcon /></span>
                            <span>Kembali</span>
                        </NavLink>
                    </Button>

                    <Menu as="div" className="relative inline-block">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-violet-500 px-7 py-2 font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <div className="flex items-center gap-1">
                                    <span><PrinterIcon /></span>
                                    <span>Print</span>
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                {active ? (
                                                    <MoveActiveIcon
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <MoveInactiveIcon
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                Whatsapp
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                {active ? (
                                                    <EditActiveIcon
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <EditInactiveIcon
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                Print Out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <Button color="info" className="w-full" onClick={openModal}>
                        <div className="flex items-center gap-1">
                            <span><StarIcon /></span>
                            <span>Rating</span>
                        </div>
                    </Button>

                </div>
            </App>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Rating Transaksi
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        <form className="space-y-10">
                                            <div className="">
                                                <label>Rating ({rating})</label>
                                                <div className="flex items-center gap-2 mt-2">
                                                    {[...Array(5)].map((star, i) => {
                                                        const ratingValue = i + 1;

                                                        return (
                                                            <span key={i}>
                                                                <FaStar
                                                                    className="star"
                                                                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                                                    size={30}
                                                                    onMouseEnter={() => setHover(ratingValue)}
                                                                    onMouseLeave={() => setHover(0)}
                                                                    onClick={() => setRating(ratingValue)}
                                                                />
                                                            </span>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                            <div>
                                                <InputFloating label="Keterangan" />
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4 space-x-5">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Kirim
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}