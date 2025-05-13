import { useEffect, useRef, ReactElement, useState } from 'react';

import { Spinner } from '@ui';

import { LoadingOverlay, Preview, Wrapper } from './Playground.styles';
import { IPlaygroundProps } from './Playground.interfaces.ts';

export const Playground = ({ code, className }: IPlaygroundProps): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadHandler = () => setIsLoading(false);

    frameRef.current?.contentWindow?.addEventListener('load', loadHandler);

    return () => {
      frameRef.current?.contentWindow?.removeEventListener('load', loadHandler);
    };
  }, [frameRef]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      frameRef.current!.contentWindow?.postMessage(code);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [code, frameRef]);

  return (
    <Wrapper className={className}>
      <Preview
        $isLoading={isLoading}
        ref={frameRef}
        title="Playground"
        src="/playground.html"
        sandbox="allow-scripts allow-same-origin"
      ></Preview>
      {isLoading && (
        <LoadingOverlay>
          <Spinner color="primary" size={40} />
        </LoadingOverlay>
      )}
    </Wrapper>
  );
};
