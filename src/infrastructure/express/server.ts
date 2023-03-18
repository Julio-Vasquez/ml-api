import { Express, Response, Request } from 'express'

import { PORT } from './../constants/server.constant'

const server = (app: Express) => {
    app.get('/', (_req: Request, res: Response) => {
        res.send('root')
    })
    app.listen(PORT, () => {
        console.log(`server running in port ${PORT}`)
    })
}

export default server
