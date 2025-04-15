interface INetworkError {
  message: string;
  code?: string;
}

interface IApiError<T = unknown> {
  response: {
    status: number;
    data: T;
  };
  message?: string;
}

export type THttpError<T = unknown> = IApiError<T> | INetworkError;
