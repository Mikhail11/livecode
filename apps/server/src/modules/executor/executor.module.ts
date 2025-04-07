import { Module } from '@nestjs/common';
import { ExecutorService } from './executor.service';
import { ExecutorController } from './executor.controller';
import { HttpClientModule } from '~utils/http-client';

@Module({
  // Другой модуль, exports из которого может быть использован внутри ExecutorModule - кого мы "приглашаем" в текущий модуль
  imports: [HttpClientModule],
  controllers: [ExecutorController],
  // Регистрирует сервисы, которые создаются (описаны) в этом модуле.
  providers: [ExecutorService],
  // Сервисы, которые должны быть доступны в других частях проекта
  exports: [],
})
export class ExecutorModule {}
