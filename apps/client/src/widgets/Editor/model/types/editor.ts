import { editor } from 'monaco-editor';
import { WebsocketProvider } from 'y-websocket';

export type NullableEditor = editor.IStandaloneCodeEditor | null;
export type NullableProvider = WebsocketProvider | null;
