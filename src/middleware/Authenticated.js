import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Authenticated(props) {
    const navigate = useNavigate()
    const token = Cookies.get('token')

    const cekToken = async () => {
        await axios.get('/protected', {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .catch(err => {
                Cookies.remove('token')
                navigate('/')
            })
    }

    useEffect(() => {
        cekToken()
    }, [])

    return props.render
}

export default Authenticated