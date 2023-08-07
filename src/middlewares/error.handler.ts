import { Request, Response, NextFunction } from 'express'

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

function boomErrorHandler(
  err,
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
