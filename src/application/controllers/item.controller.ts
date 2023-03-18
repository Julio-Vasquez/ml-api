import { NextFunction, Request, Response } from 'express'

import ItemService from '../../domain/services/item.service'
import { HttpStatus } from '../../@common/enums/status.enum'
import { formatAllItems, formatItemDetail } from '../utils/format.json'

class ItemController {
    public async getItems(req: Request, res: Response, next: NextFunction) {
        const { q } = req.query

        if (!q) {
            res.status(HttpStatus.BAD_REQUEST).json({
                status: 'error',
                message: 'Invalid query params',
                payload: {},
                statusCode: HttpStatus.BAD_REQUEST,
            })
        }

        try {
            const { payload, statusCode } = await ItemService.getItems({ q })

            const response = formatAllItems(payload)

            res.status(statusCode).json(response)
        } catch (e) {
            next(e)
        }
    }

    public async getItemById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        if (!id) {
            res.status(HttpStatus.BAD_REQUEST).json({
                status: 'error',
                message: 'Valid id required',
                payload: {},
                statusCode: HttpStatus.BAD_REQUEST,
            })
        }

        try {
            const { payload, statusCode } = await ItemService.getItemById(id)

            const response = formatItemDetail(payload)

            res.status(statusCode).json(response)
        } catch (e) {
            next(e)
        }
    }
}

export default new ItemController()
