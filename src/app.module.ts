import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PersonnelModule } from './personnel/personnel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals/animal.entity';
import { AnimalsModule } from './animals/animal.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TrainerModule } from './trainer/trainer.module';
import { KeeperModule } from './keeper/keeper.module';

@Module({
  imports: [
    AnimalsModule,
    PersonnelModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TrainerModule,
    KeeperModule,
  ],
  controllers: [AppController]
})
export class AppModule {}
