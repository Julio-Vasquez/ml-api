import { config } from 'dotenv'

config()

export const TIMEOUT_CONST: number = process.env.TIMEOUT_API

export const BASE_URL_CONST: string = process.env.BASE_URL_API
