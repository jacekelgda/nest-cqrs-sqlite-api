import { Module } from '@nestjs/common';
import { FooModule } from './foo/foo.module';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foo } from './foo/models/foo.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Foo],
      synchronize: true,
    }),
    FooModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
