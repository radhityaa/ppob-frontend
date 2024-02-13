import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="h-20 lg:h-16">
            {/* <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow lg:w-96 mx-auto">
                <div id="tabs" className="flex justify-between">
                    <NavLink to={'/dashboard'} className="w-full focus:text-base hover:text-base justify-center inline-block text-center pt-2 pb-1">
                        <img src="/images/icons/home.png" width={25} height={25} className='inline-block mb-1' />
                        <span className="tab tab-home block text-xs">Home</span>
                    </NavLink>
                    <NavLink to="/transaction" className="w-full focus:text-base hover:text-base justify-center inline-block text-center pt-2 pb-1">
                        <img src="/images/icons/transaction.png" width={25} height={25} className="inline-block mb-1" />
                        <span className="tab tab-kategori block text-xs">Transaksi</span>
                    </NavLink>
                    <NavLink to="/saldo" className="w-full focus:text-base hover:text-base justify-center inline-block text-center pt-2 pb-1">
                        <img src="/images/icons/wallet.png" width={25} height={25} className="inline-block mb-1" />
                        <span className="tab tab-explore block text-xs">Mutasi</span>
                    </NavLink>
                    <NavLink to="/deposit/history" className="w-full focus:text-base hover:text-base justify-center inline-block text-center pt-2 pb-1">
                        <img src="/images/icons/deposit.png" width={25} height={25} className="inline-block mb-1" />
                        <span className="tab tab-whishlist block text-xs">Deposit</span>
                    </NavLink>
                    <NavLink to='/account' className="w-full focus:text-base hover:text-base justify-center inline-block text-center pt-2 pb-1">
                        <img src="/images/icons/profile.png" width={25} height={25} className="inline-block mb-1" />
                        <span className="tab tab-account block text-xs">Profil</span>
                    </NavLink>
                </div>
            </section>
            {/* </section> */}
        </div>
    )
}
