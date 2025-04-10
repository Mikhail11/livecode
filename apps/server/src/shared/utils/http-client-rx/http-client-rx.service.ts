import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AxiosRequestConfig } from 'axios';
import { THttpError } from './http-client-rx.interfaces';

@Injectable()
export class HttpClientRxService {
  constructor(private readonly httpService: HttpService) {}

  get<Response>(
    url: string,
    config?: AxiosRequestConfig,
  ): Observable<Response> {
    return this.httpService.get<Response>(url, config).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  post<Response, Request>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ): Observable<Response> {
    return this.httpService.post<Response, Request>(url, data, config).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  private handleError = (error: THttpError): Observable<never> => {
    if ('response' in error) {
      const { data } = error.response;

      const isMessageExist =
        typeof data === 'object' && data !== null && 'message' in data;

      const message = isMessageExist ? data.message : 'API Error';

      throw new HttpException(
        {
          status: error.response.status,
          message: message,
          details: error.response.data,
        },
        error.response.status,
      );
    }

    if ('request' in error) {
      throw new HttpException(
        {
          status: HttpStatus.SERVICE_UNAVAILABLE,
          message: 'Service unavailable',
          details: error.message,
        },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }

    throw new HttpException(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal error',
        details: error.message,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  };
}
