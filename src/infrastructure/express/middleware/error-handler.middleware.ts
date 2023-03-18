import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

export const errorHandler = (
    err: ErrorRequestHandler,
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.json({ error: true, message: err?.toString() })
}
