import { FC } from 'react';
import { IOutputConsoleProps } from './OutputConsole.interfaces';
import { Console, Error, Success, Wrapper } from './OutputConsole.styles';
import { useCodeStore } from '@entities/Code';

export const OutputConsole: FC<IOutputConsoleProps> = ({ className }) => {
  const { executionResult: result } = useCodeStore();

  return (
    <Wrapper className={className}>
      <Console>
        {result?.run.stdout && <Success>{result.run.stdout}</Success>}

        {result?.run.stderr && <Error>{result.run.stderr}</Error>}
      </Console>
    </Wrapper>
  );
};
