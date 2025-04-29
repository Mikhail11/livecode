import { buildSelector } from '@utils';

export const [useCodeStore, getCodeStore] = buildSelector((state: IStateSchema) => state.code);
