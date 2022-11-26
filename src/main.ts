import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //Param을 통해 어떠한 값을 받을때 우리가 원하는 자료형으로 변형
      whitelist: true, //validation을 위한 decorator가 붙어 있지 않은 속성들은 제거
      forbidNonWhitelisted: true, //validation에 일치하지 않으면 아예 접근을 막아버리는 기능
    }),
  );
  await app.listen(3000);
}
bootstrap();
