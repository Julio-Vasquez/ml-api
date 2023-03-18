import { Express } from 'express'

import itemRouter from './item.router'
import rootRouter from './root.router'
import { PREFIX } from './../../constants/server.constant'

const router = (app: Express) => {
    app.use(`/${PREFIX}/`, itemRouter)
    app.use('/', rootRouter)
}

export default router
