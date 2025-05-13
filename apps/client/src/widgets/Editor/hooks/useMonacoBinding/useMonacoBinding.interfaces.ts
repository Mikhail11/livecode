import { NullableEditor } from '../../model';
import { Dispatch, SetStateAction } from 'react';

export type TUseMonacoBindingResult = [NullableEditor, Dispatch<SetStateAction<NullableEditor>>];
