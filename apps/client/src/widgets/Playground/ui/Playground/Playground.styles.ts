import styled from 'styled-components';
import { IPreviewProps } from '@widgets/Playground/ui/Playground/Playground.interfaces.ts';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  isolation: isolate;

  height: 100%;
  width: 100%;
`;

export const LoadingOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
`;

export const Preview = styled.iframe<IPreviewProps>`
  width: 100%;
  height: 100%;
  border: none;
  opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`;
