import { createAsyncThunk } from '@reduxjs/toolkit';
import { TExecuteCodeResponse } from './executeCode.interfaces';
import { IThunkConfig } from '@types';
import { isSuccessResponse } from '@utils';
import { ENDPOINTS } from '@constants';
import { IExecuteCodePayload, IExecuteCodeResult } from '../../types';
import { AxiosResponse } from 'axios';

export const executeCode = createAsyncThunk<
  IExecuteCodeResult,
  IExecuteCodePayload,
  IThunkConfig<string>
>('code/executeCode', async (payload, thunkApi) => {
  const {
    rejectWithValue,
    extra: { axiosClient },
  } = thunkApi;

  try {
    const response = await axiosClient.post<
      IExecuteCodePayload,
      AxiosResponse<TExecuteCodeResponse>
    >(ENDPOINTS.executeCode, payload);

    if (!isSuccessResponse(response.data)) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  } catch (error) {
    console.error(error);

    const message = error instanceof Error ? error.message : 'Unknown error';

    return rejectWithValue(`Executing code error: ${message}`);
  }
});
