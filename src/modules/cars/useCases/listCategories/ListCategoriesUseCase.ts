import { inject, injectable } from 'tsyringe';
import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRespository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categoriesList = await this.categoriesRespository.list();
    return categoriesList;
  }
}

export { ListCategoriesUseCase };
