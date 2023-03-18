import cors from 'cors'
import morgan from 'morgan'
import { Express, json } from 'express'

import { errorHandler } from './error-handler.middleware'

const middleware = (app: Express) => {
    app.use(json())
    app.use(cors())
    app.use(morgan('dev'))
    app.use(errorHandler)
}

export default middleware
