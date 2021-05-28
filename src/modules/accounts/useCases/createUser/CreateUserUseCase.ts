import { inject, injectable } from 'tsyringe';
import { ICreateUsersDTO } from '../../dtos/ICreateUsersDTO';
import { IUsersRepoistory } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepositoru: IUsersRepoistory
  ) {}

  async execute({
    name,
    password,
    username,
    email,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    await this.usersRepositoru.create({
      name,
      password,
      username,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
