import { useEffect, useState } from 'react';

type TInitialState = number | string | boolean;

type TStateSetter<T> = (newState: T) => void;

const setPersistState = <T extends TInitialState>(stateKey: string, newState: T): void => {
  localStorage.setItem(stateKey, JSON.stringify(newState));
};

const getPersistState = <T extends TInitialState>(stateKey: string, fallbackState: T): T => {
  const item = localStorage.getItem(stateKey);
  if (item) {
    return JSON.parse(item);
  }

  setPersistState(stateKey, fallbackState);

  return fallbackState;
};

/** Хук сохраняющий состояние в локал сторадж и при маунте извлекающий его */
export function usePersistState<T extends TInitialState>(
  initialState: T,
  key: string = 'code'
): [T, TStateSetter<T>] {
  const [state, setState] = useState<T>(() => getPersistState(key, initialState));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPersistState(key, state);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [state, key]);

  return [state, setState];
}

export default usePersistState;
