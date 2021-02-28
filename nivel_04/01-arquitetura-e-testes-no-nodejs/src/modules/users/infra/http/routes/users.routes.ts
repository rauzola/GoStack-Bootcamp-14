import { Router } from 'express';
import multer from 'multer';
import { container } from 'tsyringe';

import uploadConfig from '@config/upload';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UserController from '../controllers/UserController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userController = new UserController();
const userAvatarController = new UserAvatarController();

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);
export default usersRouter;
