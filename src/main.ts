import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      //transform은 요청데이터를 필요한 데이터형태로 바꿔준다. 원래는 string으로 받지만 number로 바꿔주고 있다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
