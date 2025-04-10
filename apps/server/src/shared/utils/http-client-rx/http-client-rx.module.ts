import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpClientRxService } from './http-client-rx.service';

@Module({
  imports: [HttpModule],
  providers: [HttpClientRxService],
  exports: [HttpClientRxService],
})
export class HttpClientRxModule {}
