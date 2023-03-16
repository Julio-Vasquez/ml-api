import express, { Express, Response, Request, json } from 'express'

const bootstrap = (): void => {
    const app: Express = express()

    app.use(json())

    app.get('/', (req: Request, res: Response) => {
        console.log(req.body)
        res.send('hey')
    })

    app.listen(8550, () => {
        console.log('server running')
    })
}

bootstrap()
