import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PersonnelModule } from './personnel/personnel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals/animal.entity';
import { AnimalsModule } from './animals/animal.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    AnimalsModule,
    PersonnelModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'test',
    //   entities: [Animal],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController]
})
export class AppModule {}
