import { getRepository, Repository } from 'typeorm';
import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO';
import { User } from '../../entities/User';
import { IUsersRepoistory } from '../IUsersRepository';

class UsersRepository implements IUsersRepoistory {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
