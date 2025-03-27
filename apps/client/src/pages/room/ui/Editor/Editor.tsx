import { ReactElement } from 'react';

import { IEditorProps } from './Editor.interfaces';
import { EditArea, Wrapper } from './Editor.styles';

export const Editor = ({ className, onChange, defaultCode = '' }: IEditorProps): ReactElement => {
  const handleChange = (code: string | undefined) => {
    onChange?.(code || '');
  };

  return (
    <Wrapper className={className}>
      <EditArea onChange={handleChange} defaultValue={defaultCode} defaultLanguage="javascript" />
    </Wrapper>
  );
};
