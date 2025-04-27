export enum EEncoding {
  Base64 = 'base64',
  Hex = 'hex',
  Utf8 = 'utf8',
}

interface IFileDto {
  name?: 'sandbox';
  content: string;
  encoding?: EEncoding;
}

export interface IExecuteCodePayload {
  language: string;
  version: string;
  files: IFileDto[];
  stdin?: '';
  args?: unknown[];
  compile_timeout?: number;
  run_timeout?: number;
  compile_memory_limit?: number;
  run_memory_limit?: number;
}

interface IResult {
  stdout: string;
  stderr: string;
  output: string;
  code: number;
  signal: null;
}

export interface IExecuteCodeResult {
  language: string;
  version: string;
  run: IResult;
  compile?: IResult;
}
