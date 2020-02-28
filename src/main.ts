import { NestFactory, HttpAdapterHost, AbstractHttpAdapter } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir([
    join(__dirname, '..', 'src', 'views'),
    join(__dirname, '..', 'src', 'animals', 'views'),
    join(__dirname, '..', 'src', 'personnel', 'views'),
  ]);

  app.setViewEngine('pug');

  await app.listen(process.env.PORT || serverConfig.port);
}
bootstrap();
