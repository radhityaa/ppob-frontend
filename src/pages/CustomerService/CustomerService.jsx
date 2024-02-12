import Header from "../../components/Header/Header";
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader";
import App from "../layouts/App";

export default function CustomerService() {
    return (
        <App title='Customer Service'>
            <SimpleHeader title={'Customer Service'} />

            <div className="mt-2 space-y-3">
                <div className='bg-white mx-3 p-4'>
                    <div className="flex items-center gap-5">
                        <div className="rounded-full shadow-lg overflow-hidden h-20 w-20">
                            <img src="/images/user_cs.jpg" />
                        </div>
                        <div>
                            <div className="text-lg font-bold line-clamp-1">Rama Adhitya Setiadi</div>
                            <div className="text-sm text-slate-700 font-semibold italic">Administrator</div>
                            <div className="text-sm mt-2 text-slate-600">
                                <div>WhatsApp: 0895347113987</div>
                                <div>Instagram: @radhityas_</div>
                                <div>Telegram: 0895347113987</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white mx-3 p-4'>
                    <div className="flex items-center gap-5">
                        <div className="rounded-full shadow-lg overflow-hidden h-20 w-20">
                            <img src="/images/user_cs.jpg" />
                        </div>
                        <div>
                            <div className="text-lg font-bold line-clamp-1">Rama Adhitya Setiadi</div>
                            <div className="text-sm text-slate-700 font-semibold italic">Administrator</div>
                            <div className="text-sm mt-2 text-slate-600">
                                <div>WhatsApp: 0895347113987</div>
                                <div>Instagram: @radhityas_</div>
                                <div>Telegram: 0895347113987</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}