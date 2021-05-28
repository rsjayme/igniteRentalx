import { ICreateUsersDTO } from '../dtos/ICreateUsersDTO';

interface IUsersRepoistory {
  create(data: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepoistory };
