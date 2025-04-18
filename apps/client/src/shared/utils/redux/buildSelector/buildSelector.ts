import { useSelector } from 'react-redux';
import { TBuildSelectorResult, THook, TSelector } from './buildSelector.interfaces';

export function buildSelector<T, Args extends unknown[]>(
  selector: TSelector<T, Args>
): TBuildSelectorResult<T, Args> {
  const useSelectorHook: THook<T, Args> = (...args: Args) =>
    useSelector((state: IStateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
}
