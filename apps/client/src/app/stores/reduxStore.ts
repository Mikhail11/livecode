import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { codeReducer } from '@entities/Code/slice';
import { axiosClient } from '@api';
import { IThunkExtraArgument } from '@types';

export function createReduxStore() {
  // В рутРедюсор помещаем только обязательные редюсоры (не асинхронные) (см. комментарий выше)
  const rootReducer: ReducersMapObject<IStateSchema> = {
    code: codeReducer,
  };

  const extraArg: IThunkExtraArgument = {
    axiosClient: axiosClient,
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    // Инстанс axios для использорвания внутри thunk
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          // Третим аргументов в thunk будет передваться extraArgument
          extraArgument: extraArg,
        },
      }),
  });

  return store;
}
