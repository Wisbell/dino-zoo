import { NestFactory, HttpAdapterHost, AbstractHttpAdapter } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { Express } from "express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // const adapterHost: HttpAdapterHost = app.get(HttpAdapterHost);
  // const httpAdapter: AbstractHttpAdapter = adapterHost.httpAdapter;
  // const expressInstance: Express = httpAdapter.getInstance();

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // expressInstance.get('/js/bulma-slider.min.js', function(req, res) {
  //   res.sendFile(join(__dirname, '..', 'node_modules/bulma-slider/dist/js/bulma-slider.js'));
  // });
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
