import { Fragment } from "react";
import BottomSheet from "../BottomSheet/BottomSheet";
import FormatCurrency from "../../utils/FormatCurrency";

export default function ProductDisplay({ brand, activeButton, handleFilterCategory, types, data, user, target }) {
    return (
        <div className="px-2 mx-3 mt-2">
            <p className="text-slate-600 font-semibold my-3">Provider: {brand}</p>

            <div className="w-full py-2 overflow-hidden -mx-3 my-5">
                <div className="flex items-center gap-3 overflow-x-scroll scroll-smooth">
                    <FilterButtons activeButton={activeButton} types={types} handleFilterCategory={handleFilterCategory} />
                </div>
            </div>

            <ProductList data={data} user={user} target={target} />
        </div>
    )
}

function FilterButtons({ activeButton, types, handleFilterCategory }) {
    return (
        <>
            <button className={`text-sm px-3 py-1 rounded-full ${activeButton === 'All' ? 'text-white bg-base' : 'text-slate-800 bg-white hover:bg-base hover:text-white transition duration-300 ease-in-out'}`} onClick={() => handleFilterCategory('All')}>All</button>
            {types?.map((item, index) => (
                <Fragment key={index}>
                    <button className={`text-sm px-3 py-1 rounded-full ${activeButton === item ? 'text-white bg-base' : 'text-slate-800 bg-white hover:bg-base hover:text-white transition duration-300 ease-in-out'}`} onClick={() => handleFilterCategory(item)}>{item}</button>
                </Fragment>
            ))}
        </>
    );
}

function ProductList({ data, user, target }) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {data?.map((item, index) => (
                <Fragment key={index}>
                    <BottomSheet item={item} target={target} saldo={FormatCurrency(user?.saldo)} />
                </Fragment>
            ))}
        </div>
    );
}