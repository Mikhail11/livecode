import { ReactElement } from 'react';

import { IEditorProps } from './Editor.interfaces';
import { EditArea, Wrapper } from './Editor.styles';

export const Editor = ({ className, onChange }: IEditorProps): ReactElement => (
  <Wrapper className={className}>
    <EditArea onChange={onChange} defaultValue="" defaultLanguage="javascript" />
  </Wrapper>
);
