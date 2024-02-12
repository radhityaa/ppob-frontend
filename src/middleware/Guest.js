import Cookies from "js-cookie"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Guest(props) {
    const token = Cookies.get('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [])

    return props.render
}

export default Guest