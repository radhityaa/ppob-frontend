import axios from 'axios'
import GetToken from './GetToken'

const url = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL: url
})

instance.interceptors.request.use(config => {
    const token = GetToken()

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
})

export default instance
