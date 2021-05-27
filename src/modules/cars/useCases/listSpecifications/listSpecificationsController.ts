import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationUseCase.execute();

    return response.status(200).json(specifications);
  }
}

export { ListSpecificationController };
