import { ICreateUsersDTO } from '@modules/accounts/dtos/ICreateUsersDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepoistory } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepoistory {
  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}

export { UsersRepositoryInMemory };
