import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ENVALID } from 'nestjs-envalid';
import { AppModule } from './app.module';
import { Config } from './config/config';
import { configSwagger } from './utils/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors('*');
  configSwagger(app);

  const env = app.get<Config>(ENVALID);
  const logger = new Logger('Bootstrap');

  await app.listen(env.PORT);
  logger.log(`Application is running on port ${env.PORT}`);
}
bootstrap();
