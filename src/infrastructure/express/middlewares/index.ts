import { Express, json } from 'express'

const middleware = (app: Express) => {
    app.use(json())
}

export default middleware
