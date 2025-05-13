import { NullableEditor, NullableProvider } from '../../model';
import { useEffect } from 'react';
import { editor } from 'monaco-editor';

export const useUserCursor = (provider: NullableProvider, editor: NullableEditor): void => {
  useEffect(() => {
    if (!editor || !provider) return;

    const updateCursorPosition = (event: editor.ICursorPositionChangedEvent) => {
      provider.awareness.setLocalStateField('cursor', {
        line: event.position.lineNumber,
        column: event.position.column,
      });
    };

    const disposable = editor.onDidChangeCursorPosition(updateCursorPosition);

    return () => disposable.dispose();
  }, [editor, provider]);
};
