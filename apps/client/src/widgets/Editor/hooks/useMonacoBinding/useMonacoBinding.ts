import { useEffect, useState } from 'react';

import * as Y from 'yjs';
import { MonacoBinding } from 'y-monaco';

import { TUseMonacoBindingResult } from './useMonacoBinding.interfaces';
import { NullableEditor, NullableProvider } from '../../model';

// https://github.com/yjs/yjs-demos/blob/main/monaco-react/src/App.tsx

export const useMonacoBinding = (
  provider: NullableProvider,
  ydoc: Y.Doc
): TUseMonacoBindingResult => {
  const [editor, setEditor] = useState<NullableEditor>(null);

  const [, setBinding] = useState<MonacoBinding | null>(null);

  useEffect(() => {
    if (!provider || !editor) {
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
