import { AppError } from './../../../shared/errors/AppError';
import { IUsersRepository } from './../../repositories/IUsersRepository';
import { User } from '../../entities/User';
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { CreateUserDTO } from './../../repositories/IUsersRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private userRepository: IUsersRepository,
  ) {}
  async execute({ email, password, username }: CreateUserDTO): Promise<User> {
    const emailAlreadyInUse = await this.userRepository.findByEmail(email);
    const userNameAlreadyInUse = await this.userRepository.findByUserName(
      username,
    );
    if (emailAlreadyInUse) throw new AppError('Email already in use!', 401);
    if (userNameAlreadyInUse)
      throw new AppError('Username already in use!', 401);
    const hashedPassword = await hash(password, 10);
    const user = await this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });
    return user;
  }
}
