import { Styled } from 'styled-components';
import { FunctionComponent } from 'react';

declare global {
  interface CustomWindow extends Window {
    styled: Styled;
  }

  let window: CustomWindow;
  let app: {
    default: FunctionComponent;
  };
}
