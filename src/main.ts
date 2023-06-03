import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({  // wrong!  in my case, anyway
    origin: 'https://revcon-init.herokuapp.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  app.setGlobalPrefix("api");
  await app.listen(process.env.PORT || 3002);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
