import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../../components/Header/Header"
import InputFloating from "../../../components/InputFloating/InputFloating"
import ProductDisplay from "../../../components/ProductDisplay/ProductDisplay"
import { getProductFilter } from "../../../features/productSlice"
import { getBrandFromPhoneNumber } from "../../../utils/ValidatePhoneNumber"
import App from "../../layouts/App"

export default function Internet() {
    const { user } = useSelector((state) => state.user)
    const [target, setTarget] = useState('')
    const [brand, setBrand] = useState('')
    const [showProduk, setShowProduct] = useState(false)
    const [activeButton, setActiveButton] = useState('All')

    const { data } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    function handleTarget(event) {
        const value = event.target.value
        setTarget(value)

        const brand = getBrandFromPhoneNumber(value)
        setBrand(brand)

        if (brand) {
            setShowProduct(true)
            dispatch(getProductFilter(`&category=data&brand=${brand}&price=asc`))
        } else {
            setShowProduct(false)
        }
    }

    function handleFilterCategory(buttonName) {
        setActiveButton(buttonName)
        if (buttonName === 'All') {
            dispatch(getProductFilter(`&category=data&brand=${brand}`))
        } else {
            dispatch(getProductFilter(`&category=data&type=${buttonName}&brand=${brand}`))
        }
    }

    function handleSearch(keyword) {
        dispatch(getProductFilter(`&category=data&brand=${brand}&search=${keyword}`))
    }

    const productTypes = data?.map(product => product.type)
    const types = Array.from(new Set(productTypes))

    return (
        <App title='Paket Data'>
            <Header />

            <div className='bg-white rounded-lg -mt-10 mx-3 p-4'>
                <div className="flex items-center gap-3">
                    <div>
                        <img src="/images/smartphone.png" width={40} height={40} />
                    </div>
                    <div className="text-lg font-semibold text-slate-700">Paket Data</div>
                </div>

                <div className="mt-7">
                    <InputFloating label="Nomor HP" type='number' value={target} onChange={handleTarget} />
                </div>
            </div>

            {showProduk && (
                <>
                    <div className="flex items-center justify-between gap-4 mt-4 mx-3">
                        <div className="w-full">
                            <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Pencarian" className="text-base bg-white rounded-lg py-1 border-0 shadow w-full mt-2 focus:outline-none focus:ring-0" />
                        </div>
                    </div>

                    <ProductDisplay
                        brand={brand}
                        activeButton={activeButton}
                        handleFilterCategory={handleFilterCategory}
                        types={types}
                        data={data}
                        user={user}
                        target={target}
                    />
                </>
            )}

        </App>
    )
}