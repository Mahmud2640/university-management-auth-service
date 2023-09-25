import { Request, Response, NextFunction } from 'express'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next()
}

export default globalErrorHandler