import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationsRepository) {}

  async execute(): Promise<Specification[]> {
    const all = await this.specificationRepository.list();
    return all;
  }
}

export { ListSpecificationsUseCase };
