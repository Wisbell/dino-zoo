import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonnelModule } from './personnel/personnel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals/animal.entity';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [
    AnimalsModule,
    PersonnelModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [Animal],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
