import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

export const errorHandler = (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    console.error(err)
    res.json({ error: true, message: err?.toString() })
}
