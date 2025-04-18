import {
  bindActionCreators,
  createSlice,
  CreateSliceOptions,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  // Создаем слайcл
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useDispatch();

    // bindActionCreators - биндим экшены к диспатчу
    // Документация https://redux.js.org/api/bindactioncreators
    // useMemo - рекомендации из документации redux
    // хук, который возвращает функцию для диспатча actions
    // Чтобы иметь возможность вызывать action-ы без диспатча
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
  };

  // Возвращаем сам слайс, как обычно
  // И хук, который возвращает функцию для диспатча actions
  // Чтобы иметь возможность вызывать action-ы без диспатча
  return {
    ...slice,
    useActions,
  };
}
