import { Button } from "flowbite-react";
import SimpleHeader from "../../../components/SimpleHeader/SimpleHeader";
import App from "../../layouts/App";
import { NavLink } from "react-router-dom";
import ArrowLeftCircleIcon from "../../../components/ArrowLeftCircleIcon/ArrowLeftCircleIcon";

export default function DetailNotification() {
    return (
        <App title='Pemberitahuan'>
            <SimpleHeader title='Pemberitahuan' />

            <div className='bg-white h-auto p-4'>
                <div className="text-center font-semibold text-lg tracking-wide">Detail Pemberitahuan</div>

                <div className="grid grid-cols-2 mt-3">
                    <div className="text-slate-700 leading-10">
                        <div>Tanggal</div>
                        <div>Keterangan :</div>
                    </div>
                    <div className="text-slate-800 font-medium leading-10">
                        <div>12/02/2024 12:12</div>
                    </div>
                </div>

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi cumque veritatis ex tempora laborum, ipsum consectetur voluptatum est ad, excepturi aspernatur, quo doloribus eum! Molestias, repellendus! Harum, consequatur minus libero assumenda est sint perferendis, voluptates magni magnam tempora, eius sit quia doloribus unde aut autem minima saepe accusamus ducimus.</div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 mx-3">
                <Button color="dark" className="w-full">
                    <NavLink to={-1} className="flex items-center gap-1">
                        <span><ArrowLeftCircleIcon /></span>
                        <span>Kembali</span>
                    </NavLink>
                </Button>
            </div>
        </App>
    )
}