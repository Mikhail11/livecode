import * as Babel from '@babel/standalone';

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

window.onerror = (
  _event: Event | string,
  _source?: string,
  _lineno?: number,
  _colno?: number,
  error?: Error
) => console.error(error);
//@ts-expect-error
window['react'] = React;
//@ts-expect-error
window['react-dom'] = ReactDOM;
window.React = React;
window.ReactDOM = ReactDOM;

//@ts-expect-error
window.styled = styled;

let output: string = '';
let oldOutput: string = output;

const babelConfig = {
  filename: 'index.tsx',
  presets: ['typescript', 'react', 'env'],
  plugins: ['transform-modules-umd'],
  moduleId: 'app',
};

const rootElement = document.getElementById('root');

window.onmessage = (event: MessageEvent) => {
  if (event.data) {
    try {
      oldOutput = output;
      output = Babel.transform(event.data, babelConfig).code!;
    } catch (error) {
      output = oldOutput;
    } finally {
      try {
        eval(output);
        const root = createRoot(rootElement!);
        root.render(React.createElement(app.default));
      } catch (error) {
        //@ts-expect-error
        console.error(error.message);
      }
    }
  }
};
