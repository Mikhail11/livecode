import { IBaseErrorResponse, IBaseSuccessResponse } from '@types';

export const isSuccessResponse = <TSuccessResponse extends IBaseSuccessResponse>(
  response: TSuccessResponse | IBaseErrorResponse
): response is TSuccessResponse => response.status === 'success' && Boolean(response.data);
