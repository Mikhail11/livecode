import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {}

  get<Response>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Response>> {
    return this.httpService.axiosRef.get(url, config);
  }

  post<Response, Request>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<Response>> {
    return this.httpService.axiosRef.post(url, data, config);
  }
}
