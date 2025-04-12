/**
 * Подробнее https://piston.readthedocs.io/en/latest/api-v2/
 */

enum EEncoding {
  Base64 = 'base64',
  Hex = 'hex',
  Utf8 = 'utf8',
}

class IFileDto {
  name?: 'my_cool_code.js';
  content: string;
  encoding?: EEncoding;
}

export class ExecuteCodeDto {
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

class ResultDto {
  stdout: string;
  stderr: string;
  output: string;
  code: number;
  signal: null;
}

export class ExecuteCodeResultDto {
  language: string;
  version: string;
  run: ResultDto;
  compile?: ResultDto;
}
