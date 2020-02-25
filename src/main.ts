import { NestFactory, HttpAdapterHost, AbstractHttpAdapter } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { Express } from 'Express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // const adapterHost: HttpAdapterHost = app.get(HttpAdapterHost);
  // const httpAdapter: AbstractHttpAdapter = adapterHost.httpAdapter;
  // const expressInstance: Express = httpAdapter.getInstance();

  // expressInstance.get('/js/axios.min.js', function(req, res) {
  //   res.sendFile(join(__dirname, '..', 'node_modules/axios/dist/axios.min.js'));
  // });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir([
    join(__dirname, '..', 'src', 'views'),
    join(__dirname, '..', 'src', 'animals', 'views'),
  ]);

  app.setViewEngine('pug');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
