import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecifications/listSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
// const listSpecificationController = new ListSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

// specificationsRoutes.get('/', (request, response) => {
//   return listSpecificationController.handle(request, response);
// });

export { specificationsRoutes };
