import { useEffect, useRef, useState } from "react"
import FormatCurrency from "../../utils/FormatCurrency"
import Axios from "../../utils/Axios"

export default function BottomSheet({ item, saldo, target, token = false }) {
    const [isOpen, setIsOpen] = useState(false)
    const [dataToken, setDataToken] = useState()

    async function getInqToken() {
        await Axios.post('/postpaid/inq-token', { target: target })
            .then(res => setDataToken(res.data.data))
            .catch(err => console.log(err.response?.data?.message))
    }

    function toggleBottomSheet() {
        setIsOpen(!isOpen)
        if (token) {
            getInqToken()
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isOpen])

    return (
        <>
            <div className={`relative rounded-lg shadow p-2 hover:bg-base/20 transition duration-300 ease-in-out cursor-pointer ${item.buyer_product_status ? 'bg-white' : 'bg-red-300/20'}`} onClick={toggleBottomSheet}>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-700">{item.product_name}</p>
                        <p className="text-xs text-slate-600">{FormatCurrency(item.price)}</p>
                    </div>
                    <div className={`absolute text-xs ${item.buyer_product_status ? 'green' : 'text-red-600 bg-red-300 px-2 py-0.5 rounded-lg right-0 -top-2'}`}>
                        {!item.buyer_product_status && 'Gangguan'}
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 flex items-end justify-center ${isOpen ? 'z-20' : '-z-20'}`}>
                {isOpen && (
                    <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={toggleBottomSheet} />
                )}

                <div className={`bg-white p-4 w-full max-w-md rounded-t-3xl shadow-lg transition-transform duration-300 ${isOpen ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
                    <h2 className="text-lg font-semibold mb-2">Rincian</h2>

                    <div>
                        <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                            <div className="text-sm text-slate-600">Nama Produk</div>
                            <div className="font-medium text-slate-800">{item.product_name}</div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                            <div className="text-sm text-slate-600">Kategori</div>
                            <div className="font-medium text-slate-800">{item.category}</div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                            <div className="text-sm text-slate-600">Brand</div>
                            <div className="font-medium text-slate-800">{item.brand}</div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                            <div className="text-sm text-slate-600">Harga</div>
                            <div className="font-medium text-slate-800">{FormatCurrency(item.price)}</div>
                        </div>

                        <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                            <div className="text-sm text-slate-600">Target/Tujuan</div>
                            <div className="font-medium text-slate-800">{target}</div>
                        </div>

                        {token && (
                            <>
                                <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                                    <div className="text-sm text-slate-600">Atas Nama</div>
                                    <div className="font-medium text-slate-800">{dataToken?.name}</div>
                                </div>

                                <div className="flex flex-wrap justify-between items-center p-3 border-b-2">
                                    <div className="text-sm text-slate-600">Power</div>
                                    <div className="font-medium text-slate-800">{dataToken?.segment_power}</div>
                                </div>
                            </>
                        )}

                        <div className="p-3 border-b-2">
                            <div className="text-sm text-slate-600">
                                {item.desc}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                            <div className="text-slate-700">Sisa Saldo: <strong>{saldo}</strong></div>

                            {item.buyer_product_status ? (
                                <button onClick={toggleBottomSheet} className="font-medium bg-base text-white py-2 px-4 rounded-lg hover:bg-base/70 transition duration-200 ease-in-out">Beli Sekarang</button>
                            ) : (
                                <button type='button' className="cursor-not-allowed font-medium bg-gray-400 text-white py-2 px-4 rounded-lg ">Beli Sekarang</button>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}