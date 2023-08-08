import { Request, Response, NextFunction } from 'express'

function errorHandler(
  err: { message: string; stack: string },
  req: Request,
  res: Response,
) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

function boomErrorHandler(
  err: { isBoom: boolean; output: { statusCode: number; payload: object } },
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

export { errorHandler, boomErrorHandler }
