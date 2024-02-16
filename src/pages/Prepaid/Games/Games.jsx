import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BottomSheet from "../../../components/BottomSheet/BottomSheet"
import Header from "../../../components/Header/Header"
import InputFloating from "../../../components/InputFloating/InputFloating"
import { getProductFilter } from "../../../features/productSlice"
import FormatCurrency from "../../../utils/FormatCurrency"
import App from "../../layouts/App"
import Select from 'react-select'
import { getCategory } from "../../../features/categorySlice"

export default function Games() {
    const { user } = useSelector((state) => state.user)
    const [target, setTarget] = useState(null)
    const [showProduk, setShowProduct] = useState(false)
    const [selectedGame, setSelectedGame] = useState(null)
    const dispatch = useDispatch()

    const { data, brands } = useSelector((state) => state.products)
    const categories = useSelector((state) => state.category.data)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch(getProductFilter(`&category=games&price=asc`))
        dispatch(getCategory('games'))

        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isOpen, dispatch, localStorage])

    function handleTarget(event) {
        const value = event.target.value
        setTarget(value)

        setShowProduct(true)
    }

    const handleChangeGame = (selectedOption) => {
        setSelectedGame(selectedOption)
        setShowProduct(true)
        dispatch(getProductFilter(`&category=games&price=asc&brand=${selectedOption.label}`))
    }

    return (
        <App title='Games'>
            <Header />

            <div className='bg-white rounded-lg -mt-10 mx-3 p-4'>
                <div className="flex items-center gap-3">
                    <div>
                        <img src="/images/games.png" width={40} height={40} />
                    </div>
                    <div className="text-lg font-semibold text-slate-700">Games</div>
                </div>

                <div className="py-5">
                    <label>Pilih Game</label>
                    <Select
                        className="mt-3"
                        options={categories}
                        onChange={handleChangeGame}
                        value={selectedGame}
                    />
                </div>

                <div className="">
                    <InputFloating label="Tujuan" type='text' value={target} onChange={handleTarget} />
                </div>
            </div>

            {showProduk && (
                <>

                    <div className="mx-3 mt-4">
                        <div className="grid grid-cols-2 gap-3">
                            {data?.map((item, index) => (
                                <Fragment key={index}>
                                    <BottomSheet item={item} saldo={FormatCurrency(user?.saldo)} target={target} />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </App>
    )
}