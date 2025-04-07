import { Controller, Get } from '@nestjs/common';
import { ExecutorService } from './executor.service';

@Controller('code')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Get('packages')
  getAllLanguages() {
    return this.executorService.getAllLanguages();
  }
}
