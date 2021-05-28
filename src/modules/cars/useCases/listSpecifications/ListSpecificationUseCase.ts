import { Specification } from '../../entities/Specification';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(private specificationRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationsUseCase };
