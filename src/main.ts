import express, { Express } from 'express'

import server from './infrastructure/express/server'
import router from './infrastructure/express/routes'
import middleware from './infrastructure/express/middleware'

const bootstrap = (): void => {
    const app: Express = express()

    middleware(app)
    router(app)
    server(app)
}

bootstrap()
