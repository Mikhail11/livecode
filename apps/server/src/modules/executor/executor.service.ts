import { Injectable } from '@nestjs/common';
import { EXECUTOR_URLS } from '~constants';
import { HttpClientService } from '~utils/http-client';
import {
  LanguageDto,
  AvailableLanguageDto,
  PossibleLanguageDto,
  ExecuteCodeDto,
  ExecuteCodeResultDto,
  PossibleLanguagesResponseDto,
  AvailableLanguagesResponseDto,
} from './dto';
import { isAxiosError } from 'axios';
import { EResponseStatus, IBaseErrorResponse, TBaseResponse } from '~types';

@Injectable()
export class ExecutorService {
  private baseUrl = `${process.env.CODE_EXECUTOR_HOST}:${process.env.CODE_EXECUTOR_PORT}`;

  constructor(private readonly httpClient: HttpClientService) {}

  async executeCode(
    dto: ExecuteCodeDto,
  ): Promise<TBaseResponse<ExecuteCodeResultDto>> {
    const url = `${this.baseUrl}${EXECUTOR_URLS.execute}`;

    try {
      const response = await this.httpClient.post<
        ExecuteCodeResultDto,
        ExecuteCodeDto
      >(url, dto);

      return {
        status: EResponseStatus.Success,
        data: response.data,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  // TODO добавить валидация данных в ответе
  async getPossibleLanguages(): Promise<
    TBaseResponse<PossibleLanguagesResponseDto>
  > {
    const url = `${this.baseUrl}${EXECUTOR_URLS.packages}`;

    try {
      const response = await this.httpClient.get<PossibleLanguageDto[]>(url);

      return {
        status: EResponseStatus.Success,
        data: {
          languages: response.data,
        },
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getAvailableLanguages(): Promise<
    TBaseResponse<AvailableLanguagesResponseDto>
  > {
    const url = `${this.baseUrl}${EXECUTOR_URLS.runtimes}`;

    try {
      const response = await this.httpClient.get<AvailableLanguageDto[]>(url);

      return {
        status: EResponseStatus.Success,
        data: {
          languages: response.data,
        },
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async installLanguage(
    languageDto: LanguageDto,
  ): Promise<TBaseResponse<LanguageDto>> {
    const url = `${this.baseUrl}${EXECUTOR_URLS.packages}`;

    try {
      const response = await this.httpClient.post<LanguageDto, LanguageDto>(
        url,
        languageDto,
      );

      return {
        status: EResponseStatus.Success,
        data: response.data,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: unknown): IBaseErrorResponse {
    return {
      data: isAxiosError(error) ? error.response?.data : undefined,
      message: isAxiosError(error) ? error.message : 'Unknown error',
      status: EResponseStatus.Error,
    };
  }
}
