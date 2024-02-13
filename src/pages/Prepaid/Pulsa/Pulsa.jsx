import Header from "../../../components/Header/Header"
import InputFloating from "../../../components/InputFloating/InputFloating"
import App from "../../layouts/App"

export default function Pulsa() {
    return (
        <App title='Pulsa'>
            <Header />

            <div className='bg-white rounded-lg -mt-10 mx-3 p-4'>
                <div className="flex items-center gap-3">
                    <div>
                        <img src="/images/smartphone.png" width={40} height={40} />
                    </div>
                    <div className="text-lg font-semibold text-slate-700">Pulsa</div>
                </div>

                <div className="mt-7">
                    <InputFloating label="Nomor HP" type='number' />
                </div>
            </div>

            <div className="p-4 mx-3">
                <p className="text-slate-600 font-semibold">Three</p>

                <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-full">
                        <input type="text" placeholder="Pencarian" className="text-base bg-white rounded-lg py-1 border-0 shadow w-full mt-2 focus:outline-none focus:ring-0" />
                    </div>
                    <div className="cursor-pointer" onClick={() => alert('filter price')}>
                        <img src="/images/icons/filter.png" className="w-6 h-6" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg shadow p-2 hover:bg-base/20 transition duration-300 ease-in-out cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">1.000</p>
                                <p className="text-xs text-slate-600">Rp 1.421</p>
                            </div>
                            <div className="text-xs text-green-600">
                                Normal
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-100 rounded-lg shadow p-2 border-2 border-red-400 cursor-not-allowed">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-slate-700">1.000</p>
                                <p className="text-xs text-slate-600">Rp 1.421</p>
                            </div>
                            <div className="text-xs text-red-600">
                                Gangguan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}