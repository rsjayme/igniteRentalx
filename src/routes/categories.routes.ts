import { Router } from 'express';
import {
  createCategoryController,
  categoriesRepository,
} from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
// const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
