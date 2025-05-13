import { useEffect, useRef } from 'react';

import { editor, Range } from 'monaco-editor';
import { NullableEditor, NullableProvider } from '../../model';

export const useRemoteCursors = (provider: NullableProvider, editor: NullableEditor): void => {
  const decorations = useRef<string[]>([]);

  useEffect(() => {
    if (!provider || !editor) return;

    const awareness = provider.awareness;
    const localClientId = awareness.clientID;

    const updateDecorations = () => {
      const states = Array.from(awareness.getStates());

      const newDecorations = states
        .filter(([clientId]) => clientId !== localClientId)
        .map(([clientId, state]) => {
          const cursor = state.cursor;

          if (!cursor) return null;

          return {
            range: new Range(cursor.line, cursor.column, cursor.line, cursor.column + 1),
            options: {
              // isWholeLine: true,
              className: `myContentClass`,
              glyphMarginClassName: `myGlyphMarginClass`,
              hoverMessage: { value: `User ${clientId}` },
              // stickiness: MonacoEditor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
            },
          };
        })
        .filter(Boolean) as editor.IModelDeltaDecoration[];

      decorations.current = editor.deltaDecorations(decorations.current, newDecorations);
    };

    awareness.on('change', updateDecorations);

    return () => {
      awareness.off('change', updateDecorations);
      decorations.current = [];
    };
  }, [provider, editor]);
};
