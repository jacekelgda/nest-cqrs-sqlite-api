import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foo } from '../models/foo.model';

export class AddFooCommand {
  constructor(public readonly bar: string) {}
}

@CommandHandler(AddFooCommand)
export class AddFooHandler implements ICommandHandler<AddFooCommand> {
  constructor(
    @InjectRepository(Foo)
    private repository: Repository<Foo>,
  ) {}

  async execute(command: AddFooCommand) {
    const { bar } = command;
    const foo = new Foo();
    foo.bar = bar;
    return await this.repository.save(foo);
  }
}
