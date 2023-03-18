import cors from 'cors'
import morgan from 'morgan'
import { Express, json } from 'express'

const middleware = (app: Express) => {
    app.use(json())
    app.use(cors())
    app.use(morgan('dev'))
}

export default middleware
