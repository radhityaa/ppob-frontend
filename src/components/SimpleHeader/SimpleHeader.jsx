import { NavLink } from "react-router-dom";
import ChevronLeft from "../ChevronLeft/ArrowLeft";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { detailUser } from "../../features/userSlice";

export default function SimpleHeader({ title }) {
    const dispatch = useDispatch()
    const token = Cookies.get('token')

    useEffect(() => {
        dispatch(detailUser(token))
    }, [])

    return (
        <div className='bg-base w-full px-3 py-2'>
            <div className="flex items-center gap-7">
                <NavLink to={-1}>
                    <ChevronLeft className={'text-white'} />
                </NavLink>
                <div>
                    <h3 className='text-white font-semibold'>{title}</h3>
                </div>
            </div>
        </div>
    )
}