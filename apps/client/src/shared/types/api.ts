export enum ERequestStatus {
  Success = 'success',
  Error = 'error',
}

export interface IBaseSuccessResponse<Data = unknown> {
  data: Data;
  status: ERequestStatus.Success;
}

export interface IBaseErrorResponse {
  data?: unknown;
  message: string;
  status: ERequestStatus.Error;
}
