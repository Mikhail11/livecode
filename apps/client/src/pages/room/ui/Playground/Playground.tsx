import { ReactElement } from 'react';
import { Preview } from './Playground.styles';

export const Playground = (): ReactElement => {
  return <Preview sandbox="allow-same-origin allow-scripts" />;
};
