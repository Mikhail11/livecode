import { IExecuteCodeResult } from '@entities/Code/types';
import { IBaseErrorResponse, IBaseSuccessResponse } from '@types';

export type TExecuteCodeSuccessResponse = IBaseSuccessResponse<IExecuteCodeResult>;

export type TExecuteCodeResponse = TExecuteCodeSuccessResponse | IBaseErrorResponse;
