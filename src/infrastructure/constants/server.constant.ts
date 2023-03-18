import { config } from 'dotenv'

config()

export const PORT = Number(process.env.PORT)

export const PREFIX = process.env.PREFIX
