import { config } from 'dotenv'

config()

export const TIMEOUT_CONST = Number(process.env.TIMEOUT_API)

export const BASE_URL_CONST = process.env.BASE_URL_API
