import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRespoitory: ICategoriesRepository) {}

  execute(): Category[] {
    const categoriesList = this.categoriesRespoitory.list();
    return categoriesList;
  }
}

export { ListCategoriesUseCase };
