import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EXECUTOR_URLS } from '~constants';
import { HttpClientService } from '~utils/http-client';
import { LanguageDto } from './dto/language.dto';

@Injectable()
export class ExecutorService {
  constructor(private readonly httpClient: HttpClientService) {}

  // TODO добавить валидация данных в ответе
  getAllLanguages(): Observable<LanguageDto[]> {
    const url = `http://${process.env.CODE_EXECUTOR_HOST}:${process.env.CODE_EXECUTOR_PORT}${EXECUTOR_URLS.allLanguages}`;

    return this.httpClient.get<LanguageDto[]>(url);
  }
}
