import { PayloadAction } from '@reduxjs/toolkit';
import { ICodeSchema, IExecuteCodeResult } from '../types';
import { executeCode } from '../api';
import { buildSlice } from '@utils';

const initialState: ICodeSchema = {
  code: '',
  isCodeExecuting: false,
  executionResult: null,
  error: null,
};

export const codeSlice = buildSlice({
  name: 'code',
  initialState,
  reducers: {
    resetResult: (state) => {
      state.executionResult = null;
    },
    setCode: (state, { payload }: PayloadAction<string>) => {
      state.code = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(executeCode.pending, (state) => {
        state.error = null;
        state.isCodeExecuting = true;
      })
      .addCase(executeCode.fulfilled, (state, action: PayloadAction<IExecuteCodeResult>) => {
        state.isCodeExecuting = false;

        state.executionResult = action.payload;
      })
      .addCase(executeCode.rejected, (state, { payload }) => {
        state.isCodeExecuting = false;
        state.error = payload || 'Unknown error';
      });
  },
});

export const { actions: codeActions, reducer: codeReducer, useActions: useCodeActions } = codeSlice;
