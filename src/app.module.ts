import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './animals/animal.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TrainerModule } from './trainer/trainer.module';
import { KeeperModule } from './keeper/keeper.module';
import { PersonnelModule } from './personnel/personnel.module';

@Module({
  imports: [
    AnimalsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TrainerModule,
    KeeperModule,
    PersonnelModule,
  ],
  controllers: [AppController]
})
export class AppModule {}
