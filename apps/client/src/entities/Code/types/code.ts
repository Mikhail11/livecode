import { IExecuteCodeResult } from './codeExecuting';

export interface ICodeSchema {
  code: string | '';
  isCodeExecuting: boolean;
  error: string | null;
  executionResult: IExecuteCodeResult | null;
}
