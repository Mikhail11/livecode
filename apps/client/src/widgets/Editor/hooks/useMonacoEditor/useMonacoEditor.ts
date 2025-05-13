import { useMemo } from 'react';

import * as Y from 'yjs';

import { useWebsocketProvider } from '../useWebsocketProvider';
import { useMonacoBinding } from '../useMonacoBinding';
import { useRemoteCursors } from '../useRemoteCursors';
import { useUserCursor } from '../useUserCursor';
import { TUseMonacoEditorResult } from './useMonacoEditor.interfaces';

export const useMonacoEditor = (): TUseMonacoEditorResult => {
  const ydoc = useMemo(() => new Y.Doc(), []);

  const provider = useWebsocketProvider(ydoc);

  const [editor, setEditor] = useMonacoBinding(provider, ydoc);

  useUserCursor(provider, editor);

  useRemoteCursors(provider, editor);

  return {
    editor,
    setEditor,
  };
};
