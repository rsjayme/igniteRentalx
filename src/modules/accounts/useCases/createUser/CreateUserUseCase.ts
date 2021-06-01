import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { ICreateUsersDTO } from '@modules/accounts/dtos/ICreateUsersDTO';
import { IUsersRepoistory } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepositoru: IUsersRepoistory
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const passwordHash = await hash(password, 8);

    const emailAlreadyExists = await this.usersRepositoru.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError('Email already exists');
    }

    await this.usersRepositoru.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
