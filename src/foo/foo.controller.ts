import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetFooQuery } from './queries/get-foo.handler';
import { Foo } from './models/foo.model';
import { CreateFooDTO } from './dto/create-foo.dto';
import { AddFooCommand } from './commands/create-foo.handler';

@Controller('foo')
export class FooController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() dto: CreateFooDTO): Promise<Foo> {
    return this.commandBus.execute(new AddFooCommand(dto.bar));
  }

  @Get()
  async findAll(): Promise<Foo[]> {
    return this.queryBus.execute(new GetFooQuery());
  }
}
