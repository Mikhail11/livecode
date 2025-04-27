// Селектор: принимает стейт, возвращает часть стейта
export type TSelector<T, Args extends unknown[]> = (state: IStateSchema, ...args: Args) => T;

// Тип самого хука: принимает аргументы, возвращает результат вызова селектора, которому будет передан стейт и принятые ранее аргументы
export type THook<T, Args extends unknown[]> = (...args: Args) => T;

// Возвращает нужную часть стейта и сам селектор
export type TBuildSelectorResult<T, Args extends unknown[]> = [THook<T, Args>, TSelector<T, Args>];
