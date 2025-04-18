import { ICodeSchema } from '@entities/Code';
import { createReduxStore } from './reduxStore';

declare global {
  interface IStateSchema {
    code: ICodeSchema;
  }

  export type TRootState = ReturnType<typeof createReduxStore>['getState'];
  export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
}
