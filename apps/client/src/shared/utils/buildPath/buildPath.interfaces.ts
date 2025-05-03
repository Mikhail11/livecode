type TParams = Record<string, string>;

export type TBuildPath = (route: string, routeParams?: TParams, searchParams?: TParams) => string;
