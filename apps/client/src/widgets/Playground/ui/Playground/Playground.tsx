import { useEffect, useRef, ReactElement } from 'react';
import { Preview, Wrapper } from './Playground.styles';
import { IPlaygroundProps } from './Playground.interfaces.ts';

export const Playground = ({ code, className }: IPlaygroundProps): ReactElement => {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    frameRef.current?.contentWindow?.postMessage(code);
  }, [code, frameRef]);

  return (
    <Wrapper className={className}>
      <Preview
        ref={frameRef}
        title="Playground"
        src="/playground.html"
        sandbox="allow-scripts allow-same-origin"
      ></Preview>
    </Wrapper>
  );
};
