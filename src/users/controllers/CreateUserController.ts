import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../users/usecases/CreateUser/CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const { username, email, password } = request.body;
    const user = await createUserUseCase.execute({ username, email, password });
    return response.status(201).json(user);
  }
}
