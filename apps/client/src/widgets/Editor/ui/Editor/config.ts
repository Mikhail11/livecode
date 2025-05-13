import { EditorProps } from '@monaco-editor/react';

export const EDITOR_CONFIG: EditorProps = {
  theme: 'vs-dark',
  defaultLanguage: 'javascript',
  options: {
    snippetSuggestions: 'none',
    contextmenu: false,
    minimap: {
      enabled: false,
    },
  },
};
