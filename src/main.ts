import { NestFactory, HttpAdapterHost, AbstractHttpAdapter  } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as config from 'config';
import { ValidationPipe } from '@nestjs/common';
import { Express } from "express";

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /* Add necessary node modules for use in front end without full node_modules file access */
  const adapterHost: HttpAdapterHost = app.get(HttpAdapterHost);
  const httpAdapter: AbstractHttpAdapter = adapterHost.httpAdapter;
  const expressInstance: Express = httpAdapter.getInstance();

  expressInstance.get('/js/bulma-toast.min.js', function(req, res) {
    res.sendFile(join(__dirname, '..', 'node_modules/bulma-toast/dist/bulma-toast.min.js'));
  });

  expressInstance.get('/css/animate.min.css', function(req, res) {
    res.sendFile(join(__dirname, '..', 'node_modules/animate.css/animate.min.css'));
  });
  /* END: Add necessary node modules */

  app.useGlobalPipes(new ValidationPipe()); // Dto validation
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Add all view directories
  app.setBaseViewsDir([
    join(__dirname, '..', 'src', 'views'),
    join(__dirname, '..', 'src', 'animal', 'views'),
    join(__dirname, '..', 'src', 'personnel', 'views'),
    join(__dirname, '..', 'src', 'trainer', 'views'),
    join(__dirname, '..', 'src', 'keeper', 'views'),
  ]);

  app.setViewEngine('pug');

  await app.listen(process.env.PORT || serverConfig.port);
}
bootstrap();
