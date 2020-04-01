import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Foo } from '../models/foo.model';
import { Repository } from 'typeorm';

export class GetFooQuery {}

@QueryHandler(GetFooQuery)
export class GetFooHandler implements IQueryHandler<GetFooQuery> {
  constructor(
    @InjectRepository(Foo)
    private repository: Repository<Foo>,
  ) {}

  async execute(query: GetFooQuery) {
    console.log('Get foo ...');
    return this.repository.find();
  }
}
