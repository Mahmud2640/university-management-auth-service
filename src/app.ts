import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userService from './app/modules/users/user.service'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({
    id: '00001',
    password: '123456',
    role: 'student',
  })
  res.send('Working Succcesfully!')
})

export default app
