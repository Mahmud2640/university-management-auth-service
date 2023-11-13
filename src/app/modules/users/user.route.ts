import express from 'express';
import { UserController } from './user.controler';
import { userValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  UserController.createUser,
);

export const UserRoutes = router;
