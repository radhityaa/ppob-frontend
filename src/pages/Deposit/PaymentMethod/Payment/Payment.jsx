import { Disclosure } from "@headlessui/react";
import { Button, FloatingLabel, List } from "flowbite-react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonOutline from "../../../../components/ButtonOutline/ButtonOutline";
import ChevronDown from "../../../../components/ChevronDown/ChevronDown";
import Header from "../../../../components/Header/Header";
import Axios from "../../../../utils/Axios";
import FormatCurrency from "../../../../utils/FormatCurrency";
import FormatTime from "../../../../utils/FormatTime";
import { showNotification } from "../../../../utils/Notif";
import App from "../../../layouts/App";

export default function PaymentMethod() {
    const { reference } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    async function detailPayment() {
        await Axios.get(`/deposit/${reference}`)
            .then(res => setData(res.data?.data))
            .catch(err => {
                showNotification(err.response?.data?.message, 'error')
                navigate('/dashboard')
            })

    }

    useEffect(() => {
        detailPayment()
    }, [])

    return (
        <App title='Metode Pembayaran'>
            <Header />

            <div className='bg-white rounded-lg h-auto -mt-10 mx-3 p-4'>
                <div className="flex items-center justify-between">
                    <div className='font-semibold text-lg text-gray-custom'>Detail Pembayaran</div>
                    <div className={`font-semibold text-lg text-white bg-${data && data.status === 'PAID' ? 'green' : data.status === 'UNPAID' ? 'yellow' : 'red'}-400 rounded-full px-4 py-0.5`}>{data && data.status === 'PAID' ? 'Sukses' : data.status === 'UNPAID' ? 'Pending' : 'Gagal'}</div>
                </div>
                <div className='mt-5'>
                    <div className='border-2 border-dashed px-2'>
                        <div className="flex justify-center gap-5">
                            <div>
                                <div className='font-semibold text-xl text-gray-custom p-5'>{FormatCurrency(data && data.amount)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 text-xs text-red-500'>*Pastikan Transfer Sesuai Jumlah Diatas</div>
                    <div className="mt-5 space-y-5">
                        <FloatingLabel variant="standard" label="Nomor Referensi" defaultValue={data && data.reference} disabled={true} />
                        <FloatingLabel variant="standard" label="Fee" defaultValue={data && data.total_fee && FormatCurrency(data.total_fee)} disabled={true} />
                        <FloatingLabel variant="standard" label="Saldo Yang Diterima" defaultValue={data && data.amount_received && FormatCurrency(data.amount_received)} disabled={true} />
                        <FloatingLabel variant="standard" label="Metode Pembayaran" defaultValue={data && data.payment_name} disabled={true} />
                        <FloatingLabel variant="standard" label="Kode Bayar/Nomor VA" defaultValue={data && data.pay_code} disabled={true} />
                        <FloatingLabel variant="standard" label="Batas Pembayaran" defaultValue={data && data.expired_time && FormatTime(data.expired_time)} disabled={true} />
                    </div>
                </div>
            </div>

            {data && data.status && data.status !== 'UNPAID' ? (
                <div className='pb-10 mt-5 mx-3 p-4'>
                    <ButtonOutline onClick={() => navigate('/deposit/history')}>Kembali</ButtonOutline>
                </div>
            ) : (
                <>
                    <div className='bg-white rounded-lg h-auto mt-5 mx-3 p-4'>
                        <div className='font-semibold text-lg text-gray-custom'>Cara Pembayaran</div>
                        <div className='mt-5 space-y-2'>
                            {data.payment_method === 'Manual' ? (
                                <div className="text-sm text-gray-500 space-y-2">
                                    <div>- Setelah Di Transfer Proses Paling Cepat Di ACC 10-30 Menit</div>
                                    <div>- Silahkan Hubungi CS/Admin, jika sudah melebihi waktu yang di tentukan</div>
                                </div>
                            ) : (
                                <>
                                    {data.instructions?.map((item, index) => (
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
                                </>
                            )}
                        </div>
                    </div>

                    <div className='pb-10 mt-5 mx-3 p-4 space-y-2'>
                        <Button color="failure" className="w-full" onClick={() => navigate('/dashboard')}>Batal</Button>
                        <ButtonOutline onClick={() => navigate('/deposit/history')}>Kembali</ButtonOutline>
                    </div>
                </>
            )}
        </App>
    )
}
