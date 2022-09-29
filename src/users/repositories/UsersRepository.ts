import { IUsersRepository } from './IUsersRepository';
import { Repository } from 'typeorm';
import { User } from '@roles/entities/User';
import { dataSource } from '@shared/typeorm';
import { CreateUserDTO } from './IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }
  async create({ username, email, password }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({ username, email, password });
    return this.repository.save(user);
  }
  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }
  async delete(user: User): Promise<void> {
    await this.repository.remove(user);
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id });
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    return user;
  }
  async findByUserName(username: string): Promise<User> {
    const user = await this.repository.findOneBy({ username });
    return user;
  }
}
