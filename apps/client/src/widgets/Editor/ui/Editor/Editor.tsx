import { ReactElement } from 'react';

import { IEditorProps } from './Editor.interfaces';
import { EditArea, Wrapper } from './Editor.styles';
import { useCodeStore, useCodeActions } from '@entities/Code';
import { useMonacoBinding } from '../../hooks';

export const Editor = ({ className, onChange, defaultCode = '' }: IEditorProps): ReactElement => {
  const { code } = useCodeStore();
  const { setCode } = useCodeActions();

  const [, setEditor] = useMonacoBinding();

  const handleChange = (code: string | undefined) => {
    setCode(code || '');
    onChange?.(code || '');
  };

  return (
    <Wrapper className={className}>
      <EditArea
        value={code}
        onChange={handleChange}
        defaultValue={defaultCode}
        defaultLanguage="javascript"
        onMount={(editor) => {
          setEditor(editor);
        }}
      />
    </Wrapper>
  );
};
