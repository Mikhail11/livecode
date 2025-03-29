import { useEffect, useRef, ReactElement } from 'react';
import { Preview, Wrapper } from './Playground.styles';
import { IPlaygroundProps } from './Playground.interfaces.ts';
import htmlContent from './playground.html?raw';

export const Playground = ({ code, className }: IPlaygroundProps): ReactElement => {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage(code);
  }, [code]);

  return (
    <Wrapper className={className}>
      <Preview
        ref={frameRef}
        title="Playground"
        src={url}
        sandbox="allow-scripts allow-same-origin"
      ></Preview>
    </Wrapper>
  );
};
