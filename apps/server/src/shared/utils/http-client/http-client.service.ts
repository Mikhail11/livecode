import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AxiosRequestConfig } from 'axios';
import { THttpError } from './http-client.interfaces';

@Injectable()
export class HttpClientService {
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

  post<Request, Response>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig,
  ): Observable<Response> {
    return this.httpService.post<Response>(url, data, config).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

  private handleError = (error: THttpError): Observable<never> => {
    if ('response' in error) {
      const message = `API Error [${error.response?.status}]: ${JSON.stringify(error.response?.data)}`;

      return throwError(() => new Error(message));
    }

    return throwError(
      () => new Error(error.message + '1111' || 'Network connection failed'),
    );
  };
}
