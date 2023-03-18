import axios, { AxiosInstance } from 'axios'

const configAxios = (): AxiosInstance => {
    const axiosInstance = axios.create({
        baseURL: '',
        timeout: 1,
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
