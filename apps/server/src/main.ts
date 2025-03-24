import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app';

const SERVER_PORT = process.env.SERVER_PORT || 3000;

async function startApp() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Все запросы должны начинаться с префикса api
  app.setGlobalPrefix('api');

  // Включаем автоматическую валидация согласно правилам, описанным в DTO
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(SERVER_PORT, () =>
    console.log(`Server started on port ${SERVER_PORT}`),
  );
}

startApp();
