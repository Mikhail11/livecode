import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app';

const PORT = process.env.PORT || 3000;

async function startApp() {
  const app = await NestFactory.create(AppModule);

  // Все запросы должны начинаться с префикса api
  app.setGlobalPrefix('api');

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

startApp();
