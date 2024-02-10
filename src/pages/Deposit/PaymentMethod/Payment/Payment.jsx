import { Disclosure } from "@headlessui/react";
import { FloatingLabel, List, ListGroup } from "flowbite-react";
import ChevronDown from "../../../../components/ChevronDown/ChevronDown";
import Header from "../../../../components/Header/Header";
import App from "../../../layouts/App";
import { Fragment } from "react";
import ButtonOutline from "../../../../components/ButtonOutline/ButtonOutline";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
    const instructions = [
        {
            "title": "Internet Banking",
            "steps": [
                "Login ke internet banking Maybank Anda",
                "Pilih menu <b>Transfer</b> lalu pilih <b>Maybank Virtual Account</b>",
                "Pilih <b>Rekening Sumber</b>",
                "Masukkan Nomor VA (<b>157633792482098</b>) dan jumlah pembayaran (<b>40000</b>) lalu klik <b>Lanjutkan</b>",
                "Detail transaksi akan ditampilkan, pastikan data sudah sesuai lalu klik <b>Lanjutkan</b>",
                "Masukkan <b>SMS Token</b> lalu klik <b>Lanjutkan</b>",
                "Transaksi sukses, simpan bukti transaksi Anda"
            ]
        },
        {
            "title": "ATM Maybank",
            "steps": [
                "Pilih menu <b>Transfer</b>",
                "Pilih <b>Virtual Account</b>",
                "Masukkan nomor Virtual Account (<b>157633792482098</b>) dan jumlah yang harus dibayar (<b>40000</b>)",
                "Pilih <b>Ya</b>",
                "Detail transaksi akan ditampilkan, pastikan data sudah sesuai lalu pilih <b>YA</b>",
                "Transaksi sukses, simpan bukti transaksi Anda"
            ]
        }
    ]

    const navigate = useNavigate()

    return (
        <App title='Metode Pembayaran'>
            <Header />

            <div className='bg-white rounded-lg h-auto -mt-10 mx-3 p-4'>
                <div className='font-semibold text-lg text-gray-custom'>Menunggu Pembayaran</div>
                <div className='mt-5'>
                    <div className="flex justify-center mb-5">
                        <img src="https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png" className='w-32 h-16' />
                    </div>
                    <div className='border-2 border-dashed px-2'>
                        <div className="flex justify-center gap-5">
                            <div>
                                <div className='font-semibold text-xl text-gray-custom p-5'>Rp. 50.000</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 text-xs text-red-500'>*Pastikan Transfer Sesuai Jumlah Diatas</div>
                    <div className="mt-5 space-y-5">
                        <FloatingLabel variant="standard" label="Nomor Referensi" defaultValue={'DEV-T19336141788ADEUF'} disabled={true} />
                        <FloatingLabel variant="standard" label="Kode Bayar/Nomor VA" defaultValue={'1350626901'} disabled={true} />
                        <FloatingLabel variant="standard" label="Batas Pembayaran" defaultValue={'05 February 2024 00:37 WIB'} disabled={true} />
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg h-auto mt-5 mx-3 p-4'>
                <div className='font-semibold text-lg text-gray-custom'>Cara Pembayaran</div>
                <div className='mt-5 space-y-2'>
                    {instructions.map((item, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>{item.title}</span>
                                        <ChevronDown className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="w-full text-sm text-gray-500">
                                        <List ordered>
                                            {item.steps.map((item, index) => (
                                                <Fragment key={index}>
                                                    <List.Item><span dangerouslySetInnerHTML={{ __html: item }} /></List.Item>
                                                </Fragment>
                                            ))}
                                        </List>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>

            <div className='pb-10 mt-5 mx-3 p-4'>
                <ButtonOutline onClick={() => navigate('/dashboard')}>Batal</ButtonOutline>
            </div>
        </App>
    )
}
