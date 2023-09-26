import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/users/', userRoute)

//testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   next('error')
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app
