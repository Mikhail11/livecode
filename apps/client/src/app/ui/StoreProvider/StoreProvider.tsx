import { FC, PropsWithChildren, useState } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../stores';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store] = useState(createReduxStore);

  return <Provider store={store}>{children}</Provider>;
};
