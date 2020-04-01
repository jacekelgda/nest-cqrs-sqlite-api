import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { FooController } from './foo.controller';
import { GetFooHandler } from './queries/get-foo.handler';
import { AddFooHandler } from './commands/create-foo.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foo } from './models/foo.model';

@Module({
  imports: [TypeOrmModule.forFeature([Foo]), CqrsModule],
  controllers: [FooController],
  providers: [GetFooHandler, AddFooHandler],
})
export class FooModule {}
