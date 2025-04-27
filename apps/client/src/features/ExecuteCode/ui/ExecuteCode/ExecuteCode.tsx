import { FC } from 'react';
import { Button } from './ExecuteCode.styles';
import { TEXTS } from './ExecuteCode.constants';
import { useCodeStore } from '@entities/Code';
import { executeCode } from '@entities/Code/api';
import { useAppDispatch } from '@hooks';

export const ExecuteCode: FC = () => {
  const { code, isCodeExecuting } = useCodeStore();
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    if (!code) {
      return;
    }

    dispatch(
      executeCode({
        language: 'javascript',
        version: '20.x',
        files: [
          {
            content: code,
          },
        ],
      })
    );
  };

  return (
    <Button type="button" onClick={handleClick} disabled={isCodeExecuting}>
      {TEXTS.button}
    </Button>
  );
};
