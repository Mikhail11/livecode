import { AxiosInstance } from 'axios';

export interface IThunkExtraArgument {
  axiosClient: AxiosInstance;
}

export interface IThunkConfig<T = unknown> {
  rejectValue: T;
  extra: IThunkExtraArgument;
  state: IStateSchema;
}
