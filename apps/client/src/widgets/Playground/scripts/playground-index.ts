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

// @ts-ignore
window['react'] = React;
// @ts-ignore
window['react-dom'] = ReactDOM;
// @ts-ignore
window['styled-components'] = styled;
window.React = React;
window.ReactDOM = ReactDOM;

let output: string = '';

const babelConfig = {
  filename: 'index.tsx',
  presets: ['typescript', 'react', 'env'],
  plugins: ['transform-modules-umd'],
  moduleId: 'app',
};

const rootElement = document.getElementById('root');
const errorContainer = document.getElementById('error');
const errorMessage = document.getElementById('error-message');

const root = createRoot(rootElement!);

window.addEventListener('message', (event: MessageEvent) => {
  if (event.data) {
    try {
      hideError();
      output = Babel.transform(event.data, babelConfig).code!;
      eval(output);

      root.render(React.createElement(app.default));
    } catch (error: unknown) {
      if (error instanceof Error) {
        showError(error.message);
      }
    }
  }
});

function showError(message: string): void {
  if (errorContainer) {
    errorContainer.style.display = 'block';
    rootElement!.style.display = 'none';
    errorMessage!.innerText = message;
  }
}

function hideError(): void {
  if (errorContainer) {
    rootElement!.style.display = 'block';
    errorContainer.style.display = 'none';
  }
}
