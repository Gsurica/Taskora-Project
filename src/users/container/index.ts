import { CreateUserController } from './../controllers/CreateUserController';
import { IUsersRepository } from './../repositories/IUsersRepository';
import { UsersRepository } from './../repositories/UsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton('CreateUserController', CreateUserController);
