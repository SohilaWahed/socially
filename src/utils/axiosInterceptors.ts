import axios, { type InternalAxiosRequestConfig } from 'axios'
import { getToken, removeToken } from './tokens'
import ROUTES from '@/constants/routes.constants'

const axiosClient = axios.create(
    {
        baseURL: import.meta.env.VITE_API_BASE_URL || 'https://route-posts.routemisr.com/',
        headers: {
            'Content-Type': 'application/json',
        }
    }
)


axiosClient.interceptors.request.use(
    (reqConfig: InternalAxiosRequestConfig) => {
        const token = getToken()
        if (token && reqConfig.headers) {
            reqConfig.headers.Authorization = ` Bearer ${token}`
        }
        return reqConfig
    },
    (error) => {
        return Promise.reject(error);
    }
)


axiosClient.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === '401') {
        removeToken()
        window.location.href = ROUTES.LOGIN
    }
    return Promise.reject(error)
})


export default axiosClient