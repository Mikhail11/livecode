import { ReactElement } from 'react';
import MonacoEditor from '@monaco-editor/react';

import { IEditorProps } from './Editor.interfaces';
import { Wrapper } from './Editor.styles';
import { EDITOR_CONFIG } from './config';

export const Editor = ({ className, onChange, defaultCode = '' }: IEditorProps): ReactElement => {
  const handleChange = (code: string | undefined) => {
    onChange?.(code || '');
  };

  return (
    <Wrapper className={className}>
      <MonacoEditor {...EDITOR_CONFIG} onChange={handleChange} defaultValue={defaultCode} />
    </Wrapper>
  );
};
