import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  private specificationsRepository: SpecificationsRepository;

  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute({ name, description }: IRequest): void {
    if (this.specificationsRepository.findByName(name)) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
