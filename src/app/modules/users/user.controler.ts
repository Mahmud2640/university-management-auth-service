import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'Create User Successfully!',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Create User Failure!',
    })
  }
}

export default {
  createUser,
}
