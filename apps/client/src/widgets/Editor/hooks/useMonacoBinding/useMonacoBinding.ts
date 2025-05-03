import { ReactElement, useEffect, useMemo, useState } from 'react';

import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';

import { editor } from 'monaco-editor';
import { NullableEditor, TUseMonacoBindingResult } from './useMonacoBinding.interfaces';

// https://github.com/yjs/yjs-demos/blob/main/monaco-react/src/App.tsx

export const useMonacoBinding = (): TUseMonacoBindingResult => {
  const ydoc = useMemo(() => new Y.Doc(), []);
  const [editor, setEditor] = useState<NullableEditor>(null);
  const [provider, setProvider] = useState<WebsocketProvider | null>(null);
  const [binding, setBinding] = useState<MonacoBinding | null>(null);

  useEffect(() => {
    const provider = new WebsocketProvider('ws://localhost:5000', 'editor', ydoc);

    setProvider(provider);

    return () => {
      provider?.destroy();
      ydoc.destroy();
    };
  }, [ydoc]);

  useEffect(() => {
    if (provider == null || editor == null) {
      return;
    }

    const binding = new MonacoBinding(
      ydoc.getText(),
      editor.getModel()!,
      new Set([editor]),
      provider?.awareness
    );

    setBinding(binding);

    return () => {
      binding.destroy();
    };
  }, [ydoc, provider, editor]);

  return [editor, setEditor];
};
