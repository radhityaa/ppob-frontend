import { NavLink } from "react-router-dom";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import App from "../layouts/App";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Setting() {
    const [theme, setTheme] = useState(false)

    return (
        <App title='Pengaturan'>
            <SimpleHeader title='Pengaturan' />

            {/* Tampilan */}
            <div className="border-b-2 border-gray-200">
                <div className="px-3 bg-white w-full pb-3 pt-2">
                    <span className="text-xs text-red-600">Tampilan</span>
                </div>


                <div className='bg-white py-3 px-3 hover:bg-gray-200'>
                    <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-800">Mode Gelap</div>

                        <div>
                            <Switch
                                checked={theme}
                                onChange={setTheme}
                                className={`${theme ? 'bg-black' : 'bg-base'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    className={`${theme ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keamanan */}
            <div className="border-b-2 border-gray-200">
                <div className="px-3 bg-white w-full pb-3 pt-2">
                    <span className="text-xs text-red-600">Keamanan</span>
                </div>

                <NavLink to={'#'}>
                    <div className='bg-white py-3 px-3 hover:bg-gray-200'>
                        <div className="text-xs text-slate-800">Ubah Password</div>
                    </div>
                </NavLink>

                <NavLink to={'#'}>
                    <div className='bg-white py-3 px-3 hover:bg-gray-200'>
                        <div className="text-xs text-slate-800">Ubah PIN Transaksi</div>
                    </div>
                </NavLink>
            </div>
        </App>
    )
}