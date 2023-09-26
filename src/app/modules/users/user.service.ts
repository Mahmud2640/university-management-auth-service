import config from '../../../config/index'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { ganerateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // make Default User
  const id = await ganerateUserId()
  user.id = id

  // make Default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createUser = await User.create(user)

  if (!createUser) {
    throw new ApiError(400, 'Failed to Create user!')
  }
  return createUser
}

export default {
  createUser,
}
