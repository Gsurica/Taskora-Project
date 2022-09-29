import { CreateUserController } from './../controllers/CreateUserController';
import { Router } from 'express';
import { container } from 'tsyringe';

const userRoutes = Router();
const createUserController = container.resolve(CreateUserController);

userRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export { userRoutes };
