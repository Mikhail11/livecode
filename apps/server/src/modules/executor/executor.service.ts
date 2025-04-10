import { HttpStatus, Injectable } from '@nestjs/common';
import { EXECUTOR_URLS } from '~constants';
import { HttpClientService } from '~utils/http-client';
import { InstalledPackageDto, InstallPackageDto, PackageDto } from './dto';
import { isAxiosError } from 'axios';
import { ERequestStatus } from '~types';

@Injectable()
export class ExecutorService {
  constructor(private readonly httpClient: HttpClientService) {}

  // TODO добавить валидация данных в ответе
  async getAllLanguages() {
    const url = `http://${process.env.CODE_EXECUTOR_HOST}:${process.env.CODE_EXECUTOR_PORT}${EXECUTOR_URLS.packages}`;

    try {
      const response = await this.httpClient.get<PackageDto[]>(url);

      return {
        status: ERequestStatus.Success,
        data: {
          languages: response.data,
        },
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getAvailableAllLanguages() {
    const url = `http://${process.env.CODE_EXECUTOR_HOST}:${process.env.CODE_EXECUTOR_PORT}${EXECUTOR_URLS.runtimes}`;

    try {
      const response = await this.httpClient.get<InstalledPackageDto[]>(url);

      return {
        status: ERequestStatus.Success,
        data: {
          languages: response.data,
        },
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async installPackage(packageDto: InstallPackageDto) {
    const url = `http://${process.env.CODE_EXECUTOR_HOST}:${process.env.CODE_EXECUTOR_PORT}${EXECUTOR_URLS.packages}`;

    try {
      const response = await this.httpClient.post<
        PackageDto,
        InstallPackageDto
      >(url, packageDto);

      return {
        status: ERequestStatus.Success,
        data: response.data,
      };
    } catch (error) {
      // TODO провести рефакторинг для случая 'Already installed'
      if (
        isAxiosError(error) &&
        error.status === HttpStatus.INTERNAL_SERVER_ERROR &&
        error.response?.data &&
        'message' in error.response.data
      ) {
        return {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: error.response.data,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          message: error.response.data.message as string,
          status: ERequestStatus.Success,
        };
      }

      return this.handleError(error);
    }
  }

  private handleError(error: unknown) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: isAxiosError(error) ? error.response?.data : undefined,
      message: isAxiosError(error) ? error.message : 'Unknown error',
      status: ERequestStatus.Error,
    };
  }
}
