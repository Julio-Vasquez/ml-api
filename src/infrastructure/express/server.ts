import { Express } from 'express'

import { PORT } from './../constants/server.constant'

const server = (app: Express) => {
    app.listen(PORT, () => {
        console.log(`server running in port ${PORT}`)
    })
}

export default server
