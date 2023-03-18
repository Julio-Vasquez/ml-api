import axios from './../axios'
import { getHeader } from './header.util'
import { IMutation, IQuery } from '../../interfaces/api.interface'

export const Query = async ({ params = {}, url }: IQuery) => {
    const fetch = await axios.get(url, getHeader(params))
    const { data, status } = fetch
    return { data, status }
}

export const Mutation = async ({ method, params = {}, url, body }: IMutation) => {
    const fetch = await axios[method](url, body, getHeader(params))
    const { data, status, statusText } = fetch
    return { data, status, statusText }
}
