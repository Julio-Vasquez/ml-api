import { Request, Response } from 'express'

import { HttpStatus } from '../../@common/enums/status.enum'

class RootController {
    public async root(_: Request, res: Response) {
        res.status(HttpStatus.OK).send({ message: 'Welcome to MercadoLibre Api' })
    }
}

export default new RootController()
