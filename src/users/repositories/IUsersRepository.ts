import { User } from './../entities/User';

export type CreateUserDTO = {
  username: string;
  email: string;
  password: string;
};

export interface IUsersRepository {
  create({ username, email, password }: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
  delete(user: User): Promise<void>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUserName(username: string): Promise<User>;
}
