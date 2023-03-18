import { Router } from 'express'

import RootController from '../../../application/controllers/root.controller'

const rootRouter = () => {
    const router = Router()

    router.get('/', RootController.root)

    return router
}

export default rootRouter()
