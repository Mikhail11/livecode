import { editor } from 'monaco-editor';
import { Dispatch, SetStateAction } from 'react';

export type NullableEditor = editor.IStandaloneCodeEditor | null;

export type TUseMonacoBindingResult = [NullableEditor, Dispatch<SetStateAction<NullableEditor>>];
