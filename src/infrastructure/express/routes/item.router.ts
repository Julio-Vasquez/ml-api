import { Router } from 'express'

import ItemController from '../../../application/controllers/item.controller'

const itemRouter = () => {
    const router = Router()

    router.get('/items', ItemController.getItems)

    router.get('/items/:id', ItemController.getItemById)

    return router
}

export default itemRouter()
