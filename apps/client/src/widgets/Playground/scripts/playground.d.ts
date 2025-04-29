import { Styled } from 'styled-components';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

declare global {
  interface CustomWindow extends Window {
    styled: Styled;
    'react-dom': ReactDOM;
    react: React;
  }

  let window: CustomWindow;
  let app: {
    default: FunctionComponent;
  };
}
