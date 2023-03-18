import axios, { AxiosInstance } from 'axios'

import { BASE_URL_CONST, TIMEOUT_CONST } from '../../constants/api.constant'

const configAxios = (): AxiosInstance => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL_CONST,
        timeout: TIMEOUT_CONST,
    })

    const onFulfilled = <T>(next: T) => {
        return Promise.resolve(next)
    }

    const onRejected = (error: any) => {
        return Promise.reject(error)
    }

    axiosInstance.interceptors.response.use(onFulfilled, onRejected)

    return axiosInstance
}

export default configAxios()
