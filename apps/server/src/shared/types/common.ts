export enum EResponseStatus {
  Success = 'success',
  Error = 'error',
}

export interface IBaseNonErrorResponse<Data> {
  data: Data;
  status: Exclude<EResponseStatus, EResponseStatus.Error>;
}

export interface IBaseErrorResponse<Data = unknown> {
  data?: Data;
  message: string;
  status: EResponseStatus.Error;
}

export type TBaseResponse<ResponseData, ErrorData = unknown> =
  | IBaseNonErrorResponse<ResponseData>
  | IBaseErrorResponse<ErrorData>;
