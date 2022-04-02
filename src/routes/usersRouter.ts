import express from 'express';
import UsersController from '../controllers/usersController';
import UsersMiddlewares from '../middlewares/usersMiddlewares';

const usersRouter = express.Router();

const usersController = new UsersController();
const usersMiddlewares = new UsersMiddlewares();

usersRouter.post(
  '/',
  usersMiddlewares.validateUsername,
  usersMiddlewares.validateLevel,
  usersMiddlewares.validatePassword,
  usersMiddlewares.validateClasse,
  usersController.create,
);

export default usersRouter;