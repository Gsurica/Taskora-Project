import { CreateTableUser1664408293824 } from './migrations/1664408293824-CreateTableUser';
import { DataSource } from 'typeorm';
import { User } from '../../users/entities/User';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [User],
  migrations: [CreateTableUser1664408293824],
});
