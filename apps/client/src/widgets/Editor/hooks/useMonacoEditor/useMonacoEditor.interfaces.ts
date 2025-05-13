import { NullableEditor } from '../../model';
import { Dispatch, SetStateAction } from 'react';

export type TUseMonacoEditorResult = {
  editor: NullableEditor;
  setEditor: Dispatch<SetStateAction<NullableEditor>>;
};
