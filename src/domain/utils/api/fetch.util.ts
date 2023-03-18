import axios from './../axios'
import { getHeader } from './header.util'
import { IMutation, IQuery } from '../interfaces/api.interface'
import { BASE_URL_CONST, TIMEOUT_CONST } from '../constants/api.constant'

export const Query = async ({ params, url }: IQuery) => {
    console.log(BASE_URL_CONST, TIMEOUT_CONST)
    const fetch = await axios.get(url, getHeader(params))
    const { data, status } = fetch
    console.log(data, status)
    console.log(fetch)
    return data
}

export const Mutation = ({ method, params, url }: IMutation) => {
    console.log(axios[method](''), params, url)
}
