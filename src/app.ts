import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/users/', userRoute)

//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Succcesfully!')
})

export default app
