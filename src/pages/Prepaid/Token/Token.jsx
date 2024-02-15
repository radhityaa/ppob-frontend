import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BottomSheet from "../../../components/BottomSheet/BottomSheet"
import Header from "../../../components/Header/Header"
import InputFloating from "../../../components/InputFloating/InputFloating"
import { getProductFilter } from "../../../features/productSlice"
import FormatCurrency from "../../../utils/FormatCurrency"
import App from "../../layouts/App"

export default function Token() {
    const { user } = useSelector((state) => state.user)
    const [target, setTarget] = useState(null)
    const [showProduk, setShowProduct] = useState(false)

    const { data } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch(getProductFilter(`&category=pln&price=asc`))

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

    function handleTarget(event) {
        const value = event.target.value
        setTarget(value)

        setShowProduct(true)
    }

    return (
        <App title='Token PLN'>
            <Header />

            <div className='bg-white rounded-lg -mt-10 mx-3 p-4'>
                <div className="flex items-center gap-3">
                    <div>
                        <img src="/images/token.png" width={40} height={40} />
                    </div>
                    <div className="text-lg font-semibold text-slate-700">Token PLN</div>
                </div>

                <div className="mt-7">
                    <InputFloating label="Nomor Meteran" type='number' value={target} onChange={handleTarget} />
                </div>
            </div>

            {showProduk && (
                <div className="mx-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                        {data?.map((item, index) => (
                            <Fragment key={index}>
                                <BottomSheet item={item} saldo={FormatCurrency(user?.saldo)} target={target} token={true} />
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </App>
    )
}