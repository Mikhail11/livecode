import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app';

const PORT = process.env.PORT || 3000;

async function startApp() {
  const app = await NestFactory.create(AppModule);

  // Все запросы должны начинаться с префикса api
  app.setGlobalPrefix('api');

  // Включаем автоматическую валидация согласно правилам, описанным в DTO
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

startApp();
