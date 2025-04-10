import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExecutorService } from './executor.service';
import { InstallPackageDto } from './dto';

@Controller('code')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Get('packages')
  getAllLanguages() {
    return this.executorService.getAllLanguages();
  }

  @Get('runtimes')
  getAvailableAllLanguages() {
    return this.executorService.getAvailableAllLanguages();
  }

  @Post('packages')
  installPackage(@Body() packageDto: InstallPackageDto) {
    return this.executorService.installPackage(packageDto);
  }
}
