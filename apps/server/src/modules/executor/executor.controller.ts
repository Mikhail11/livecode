import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExecutorService } from './executor.service';
import { ExecuteCodeDto, LanguageDto } from './dto';

@Controller('code')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Post('execute')
  executeCode(@Body() dto: ExecuteCodeDto) {
    return this.executorService.executeCode(dto);
  }

  @Get('languages')
  getPossibleLanguages() {
    return this.executorService.getPossibleLanguages();
  }

  @Get('runtimes')
  getAvailableLanguages() {
    return this.executorService.getAvailableLanguages();
  }

  @Post('languages')
  installLanguage(@Body() languageDto: LanguageDto) {
    return this.executorService.installLanguage(languageDto);
  }
}
