import express from 'express'
import userControler from './user.controler'
const router = express.Router()

router.post('/create-user', userControler.createUser)

export default router
